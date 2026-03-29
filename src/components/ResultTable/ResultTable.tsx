import type { SubnetResult } from "../../models/SubnetResult";
import TableRow from "./TableRow";

type ResultTableProps = {
    results: SubnetResult | null;
}

export default function ResultTable({results}: ResultTableProps){

    if(!results) {
        return null;
    }

    const labels: Record<keyof SubnetResult, string> = {
        ipAddress: "IP Address",
        ipType: "IP Type",
        networkAddress: "Network Address",
        broadcastAddress: "Broadcast Address",
        firstHost: "First Host",
        lastHost: "Last Host",
        gateway: "Gateway",
        hosts: "Usable Hosts",
        cidr: "CIDR Notation",
        subnetMask: "Subnet Mask",
        wildcardMask: "Wildcard Mask"
    }

    return (
        <div>
            <table>
                <tbody>
                    {Object.entries(results).map(([key, value]) => (
                        <TableRow key={key} label={labels[key as keyof SubnetResult]} value={value} />
                    ))}
                </tbody>
            </table>
            <button>Export</button>
        </div>
    )
}