import type { SubnetResult } from "../models/SubnetResult";
import { jsPDF } from "jspdf";

export default function exportPdf(data: SubnetResult | SubnetResult[]) {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Subnet Calculation Result", 10, 10);

    doc.setFontSize(12);

    let y = 20;

    if (!Array.isArray(data)) {

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

        lines.forEach((line) => {
            doc.text(line, 10, y);
            y += 8;
        });

        const fileName = `subnet-result-${data.ipAddress.replace(/\./g, "-")}.pdf`;
        doc.save(fileName);
    } else {
        
        const count = data.length;

        data.forEach((result, index) => {
            const lines = [
                `Network ${index + 1}:`,
                `Network Address: ${result.networkAddress}`,
                `Host Range: ${result.firstHost} - ${result.lastHost}`,
                `Broadcast Address: ${result.broadcastAddress}`,
                ``,
            ];

            lines.forEach((line) => {
                doc.text(line, 10, y);
                y += 8;

                // 🔥 Prevent text going off page
                if (y > 280) {
                    doc.addPage();
                    y = 20;
                }
            });
        });

        const fileName = `subnet-result-${count}networks.pdf`;
        doc.save(fileName);
    }
}