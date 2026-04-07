import { useRef, useState } from "react"
import FormInputItem from "../FormInputItem/FormInputItem";
import { type FormItem, type FormState } from "../../models/types";
import { SubnetService } from "../../services/SubnetService";
import type { MinimalSubnetResult } from "../../models/MinimalSubnetResult";


const formItems: FormItem[] = [
    { label: "", type: "text", id: "network-address" },
    { label: "", type: "select", id: "subnet-mask" }
]

const subnetSegments = {
    "/24": 1,
    "/25": 2,
    "/26": 4,
    "/27": 8,
    "/28": 16,
    "/29": 32,
    "/30": 64,
}


export default function AdvancedInputForm() {

    const [defaultValues, setDefaultValues] = useState<FormState[]>([
        {
            ipAddress: "10.0.1.0",
            subnetMask: "/24 - 255.255.255.0",
        }
    ]);

    const [networkValues, setNetworkValues] = useState<MinimalSubnetResult[] | null>(null);

    const [hosts, setHosts] = useState<number | null>(256);
    const [count, setCount] = useState(1);
    const startingIp = useRef(defaultValues[0].ipAddress);

    const handleNetworkChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const value = event.target.value;
        startingIp.current = value;
        console.log(startingIp.current);
    }

    const handleHostsChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const value = event.target.value;
        console.log(value)

        const [cidr, subnetMask] = value.split(" - ");
        const segments = subnetSegments[cidr as keyof typeof subnetSegments];

        const defaultValues = [] as FormState[];
        const networks = [] as MinimalSubnetResult[];
    
    }

    return (
        <ul>
            {[...Array(count)].map((_, i) => (
                <li key={i} className="flex flex-row">
                    <FormInputItem item={formItems[0]} defaultValues={defaultValues[i]} remainingHosts={null} onChange={handleNetworkChange} />
                    <FormInputItem item={formItems[1]} defaultValues={defaultValues[i]} remainingHosts={hosts} onChange={handleHostsChange} />
                </li>
            ))}
        </ul>
    )
}