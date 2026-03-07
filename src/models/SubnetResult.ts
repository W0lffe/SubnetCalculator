/**
 * Represents the result of a subnet calculation.
 * Contains all derived network information based on
 * the provided IPv4 address and subnet mask.
 */
export interface SubnetResult {
    /** Ipv4 provided by user */
    ipAddress: string
    /** Type of IP address */
    ipType: string
    /** Network address of the subnet */
    networkAddress: string
    /** Broadcast address of the subnet */
    broadcastAddress: string
    /** First usable host address in the subnet */
    firstHost: string
    /** Last usable host address in the subnet */
    lastHost: string
    /** Default gateway */
    gateway: string
    /** Total number of usable hosts in the subnet */
    hosts: number
    /** Subnet mask represented in CIDR notation */
    cidr: number
    /** Subnet mask in dotted decimal format */
    subnetMask: string
     /** Wildcard mask */
    wildcardMask: string
}