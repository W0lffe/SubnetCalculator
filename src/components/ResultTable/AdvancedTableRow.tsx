import type { SubnetResult } from "../../models/SubnetResult";

type AdvancedTableRowProp = {
    value: SubnetResult;
}

const rowStyle = "flex justify-between gap-5 md:gap-20 border-b border-gray-400/50 shadow-sm shadow-black/30 p-1.5 md:p-2";
const dataStyle = "text-lg md:text-xl font-semibold";

export default function AdvancedTableRow({ value }: AdvancedTableRowProp) {

    return (
        <tr className={rowStyle}>
            <td className={dataStyle}>{value.networkAddress}</td>
            <td>{`${value.firstHost} - ${value.lastHost}`}</td>
            <td>{value.broadcastAddress}</td>
        </tr>
    )
}