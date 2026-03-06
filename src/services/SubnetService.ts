import ipaddr from "ipaddr.js"
import type { SubnetResult } from "../models/SubnetResult"

export class SubnetService {

    /**
     * Calculates subnet information for a given IPv4 address and subnet mask.
     *
     * The function supports two mask formats:
     * - CIDR notation (e.g., "/24")
     * - Dotted decimal notation (e.g., "255.255.255.0")
     *
     * It returns all essential subnet data needed for network planning,
     * including network address, broadcast address, usable hosts, default
     * gateway, CIDR, subnet mask, wildcard mask, and IP type.
     *
     * @param ip - The IPv4 address as a string (e.g., "192.168.1.10")
     * @param mask - The subnet mask in CIDR ("/24") or dotted decimal ("255.255.255.0")
     * @returns {SubnetResult} An object containing detailed subnet information
     *
     * @example
     * const result = SubnetService.calculate("192.168.1.10", "255.255.255.0")
     * console.log(result.networkAddress) // "192.168.1.0"
     */
    static calculate(ip: string, mask: string): SubnetResult {

        const parsedIp = ipaddr.parse(ip)

        const cidr = mask.startsWith("/")
            ? parseInt(mask.slice(1))
            : this.maskToCidr(mask)

        const ipInt = this.ipToInt(ip)
        const maskInt = this.cidrToMaskInt(cidr)
        const networkInt = ipInt & maskInt
        const broadcastInt = networkInt | (~maskInt >>> 0)
        const firstHost = networkInt + 1
        const lastHost = broadcastInt - 1
        const totalHosts = Math.max(0, broadcastInt - networkInt - 1)

        return {
            ipAddress: ip,
            networkAddress: this.intToIp(networkInt),
            broadcastAddress: this.intToIp(broadcastInt),
            firstHost: this.intToIp(firstHost),
            lastHost: this.intToIp(lastHost),
            gateway: this.intToIp(firstHost),
            hosts: totalHosts,
            subnetMask: this.intToIp(maskInt),
            cidr: cidr,
            wildcardMask: this.intToIp(~maskInt >>> 0),
            ipType: parsedIp.range()
        }
    }

    /**
     * Converts an IPv4 address from dotted-decimal format to a 32-bit integer.
     *
     * This is useful for performing bitwise subnet calculations such as
     * determining network and broadcast addresses.
     *
     * Example:
     * 192.168.1.10 -> 3232235786
     *
     * @param ip - IPv4 address in dotted decimal notation (e.g., "192.168.1.10")
     * @returns The IPv4 address represented as a 32-bit integer
     */
    private static ipToInt(ip: string): number {
        return ip.split(".")
            .map(Number)
            .reduce((acc, octet) => (acc << 8) + octet)
    }


    /**
     * Converts a 32-bit integer representation of an IPv4 address
     * back into dotted-decimal format.
     *
     * The function extracts each 8-bit octet using bit shifting and
     * bit masking operations. Each octet is isolated and then joined
     * with "." to reconstruct the IPv4 string.
     *
     * Example:
     * 3232235786 -> "192.168.1.10"
     *
     * @param int A 32-bit integer representing an IPv4 address
     * @returns IPv4 address in dotted decimal notation
     */
    private static intToIp(int: number): string {
        return [
            (int >>> 24) & 255,
            (int >>> 16) & 255,
            (int >>> 8) & 255,
            int & 255
        ].join(".")
    }

    /**
     * Converts a CIDR prefix length into a 32-bit integer subnet mask.
     *
     * CIDR notation represents the number of bits set to 1 in the subnet mask.
     * This function generates the corresponding 32-bit mask using bitwise
     * operations so it can be used for subnet calculations.
     *
     * Example:
     * /24 -> 255.255.255.0 -> 4294967040
     *
     * @param cidr The CIDR prefix length (0–32)
     * @returns A 32-bit integer representation of the subnet mask
     */
    private static cidrToMaskInt(cidr: number): number {
        return cidr === 0 ? 0 : (~0 << (32 - cidr)) >>> 0
    }

    /**
     * Converts a subnet mask in dotted decimal notation into a CIDR prefix length.
     *
     * The function converts each octet of the subnet mask to its binary
     * representation, concatenates the binary strings, and then counts
     * the number of "1" bits. The number of 1s corresponds to the CIDR prefix.
     *
     * Example:
     * 255.255.255.0 -> 11111111111111111111111100000000 -> /24
     *
     * @param mask Subnet mask in dotted decimal format (e.g., "255.255.255.0")
     * @returns The CIDR prefix length (e.g., 24)
     */
    private static maskToCidr(mask: string): number {
        return mask
            .split(".")
            .map(Number)
            .map(octet => octet.toString(2))
            .join("")
            .split("1").length - 1
    }

}