
type TableRowProps = {
    label: string;
    value: string | number;
}

const rowStyle = "flex justify-between gap-20 border-b border-gray-400/50 shadow-sm shadow-black/30 p-1.5 md:p-1";
const dataStyle = "text-lg md:text-xl font-semibold";

export default function TableRow({ label, value }: TableRowProps) {

    return(
        <tr className={rowStyle}>
            <td className={dataStyle}>{label}</td>
            <td>{value}</td>
        </tr>
    )
}