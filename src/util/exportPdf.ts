import type { SubnetResult } from "../models/SubnetResult";
import {jsPDF} from "jspdf";

export default function exportPdf(data: SubnetResult) {

    console.log(data)

    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Subnet Calculation Result", 10, 10);

    doc.setFontSize(12);

    const lines = [
        `IP Address: ${data.ipAddress}`,
        `IP Type: ${data.ipType}`,
        `Network Address: ${data.networkAddress}`,
        `Broadcast Address: ${data.broadcastAddress}`,
        `First Host: ${data.firstHost}`,
        `Last Host: ${data.lastHost}`,
        `Gateway: ${data.gateway}`,
        `Usable Hosts: ${data.hosts}`,
        `CIDR: /${data.cidr}`,
        `Subnet Mask: ${data.subnetMask}`,
        `Wildcard Mask: ${data.wildcardMask}`,
    ];

    let y = 20;

    lines.forEach((line) => {
        doc.text(line, 10, y);
        y += 8;
    });

    const fileName = `subnet-result-${data.ipAddress.replace(/\./g, '-')}.pdf`;
    doc.save(fileName);
};