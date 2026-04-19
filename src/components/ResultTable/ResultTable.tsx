import type { SubnetResult } from "../../models/SubnetResult";
import exportPdf from "../../util/exportPdf";
import exportTxt from "../../util/exportTxt";
import AdvancedTableRow from "./AdvancedTableRow";
import TableRow from "./BasicTableRow";

type ResultTableProps = {
    results: SubnetResult | SubnetResult[] | null;
}

const buttonStyle = "shadow-sm shadow-black/40 p-1 hover:px-2 hover:border-b-red-600 hover:border-b-2 rounded-sm hover:bg-linear-to-b hover:from-gray-200/10 hover:to-gray-400/25 transition-all duration-150 text-lg";
const divStyle = "w-full md:w-full flex flex-col items-center gap-3 py-5 md:border-b md:border-b-gray-400/50 md:shadow-sm md:shadow-black/10";
const selectStyle = "p-1.5 shadow-sm shadow-black/40 rounded-sm focus:px-3 transition-all duration-150 hover:border-b-red-600 hover:border-b-2 hover:px-2";


export default function ResultTable({results}: ResultTableProps){

    if(!results) {
        return null;
    }

    const isAdvanced = Array.isArray(results);

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

    const handleExport = () => {
        const formatSelect = document.getElementById("format") as HTMLSelectElement;
        const selectedFormat = formatSelect.value;

        if (selectedFormat === "txt") {
            //exportTxt(results);
        } else if (selectedFormat === "pdf") {
            //exportPdf(results);
        } 

    }

    return (
        <div className={divStyle}>
            <table className="flex">
                <tbody className="flex flex-col gap-1 md:gap-3">
                    {!isAdvanced && Object.entries(results).map(([key, value]) => (
                        <TableRow key={key} label={labels[key as keyof SubnetResult]} value={value} />
                    ))}
                    {isAdvanced && results.map((result, i) => 
                        <>
                            <AdvancedTableRow value={result} key={i} />
                        </>
                    )}
                </tbody>
            </table>
            <span className="flex flex-row gap-1">
                <select name="format" id="format" className={selectStyle}>
                    <option className="text-sm">Export as...</option>
                    <option value="txt" className="text-sm">Text File (.txt)</option>
                    <option value="pdf" className="text-sm">PDF File (.pdf)</option>
                </select>
                <button className={buttonStyle} onClick={handleExport}>Export</button>
            </span>
        </div>
    )
}