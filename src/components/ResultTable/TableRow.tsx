
type TableRowProps = {
    label: string;
    value: string;
}

export default function TableRow({ label, value }: TableRowProps) {

    return(
        <tr>
            <td>{label}</td>
            <td>{value}</td>
        </tr>
    )
}