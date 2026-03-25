import FormInputItem from "../FormInputItem/FormInputItem";
import { type FormItem } from "../../models/types"
import { useActionState } from "react";


export default function InputForm() {

    const formItems: FormItem[] = [
        { label: "IP Address", type: "text", id: "ip-address" },
        { label: "Subnet Mask / CIDR Notation", type: "select", id: "subnet-mask" }
    ]

    type FormState = {
        ipAddress: string;
        subnetMask: string;
    };

    const handleSubmit = (prevState: FormState | null, formData: FormData): FormState => {
        const ipAddress = formData.get("ip-address") as string;
        const subnetMask = formData.get("subnet-mask") as string;
        console.log("IP Address:", ipAddress);
        console.log("Subnet Mask:", subnetMask);
        return {ipAddress, subnetMask };
    }

    const [formData, formAction] = useActionState(handleSubmit, null);

    return(
        <div>
            <form action={formAction}>
                {formItems.map((item, i) =>
                    <FormInputItem key={i} item={item} defaultValues={formData}/> 
                )}
                <button type="submit">Calculate</button>
             </form>
        </div>

    )
}