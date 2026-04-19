import type { SubnetResult } from "../models/SubnetResult";

export default function exportTxt(data: SubnetResult | SubnetResult[]) {

if(!Array.isArray(data)){
    const content = `
Subnet Calculation Result

IP Address: ${data.ipAddress}
IP Type: ${data.ipType}
Network Address: ${data.networkAddress}
Broadcast Address: ${data.broadcastAddress}
First Host: ${data.firstHost}
Last Host: ${data.lastHost}
Gateway: ${data.gateway}
Usable Hosts: ${data.hosts}
CIDR: /${data.cidr}
Subnet Mask: ${data.subnetMask}
Wildcard Mask: ${data.wildcardMask}
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const fileName = `subnet-result-${data.ipAddress.replace(/\./g, '-')}.txt`;
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);
}
else{

const count = data.length;
let content = `
Subnet Calculation Result`;

    data.forEach((result, index) => {
        content += `
Network ${index + 1}:
Network Address: ${result.networkAddress}
Host Range: ${result.firstHost} - ${result.lastHost}
Broadcast Address: ${result.broadcastAddress}

`;

    });
    
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const fileName = `subnet-result-${count}networks.txt`;
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);
}

}