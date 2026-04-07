
export type MinimalSubnetResult = {
    /** Ipv4 provided by user */
    networkAddress: string;
    /** Broadcast address of the subnet */
    broadcastAddress: string;
    /** First usable host address in the subnet */
    firstHost: string;
    /** Last usable host address in the subnet */
    lastHost: string;
    /** Default gateway */
    gateway: string;
    /** Total number of usable hosts in the subnet */
    cidr: number;
    /** Subnet mask in dotted decimal format */
    subnetMask: string;
}