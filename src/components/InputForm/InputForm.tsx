import FormInputItem from "../FormInputItem/FormInputItem";
import { type FormItem, type FormState } from "../../models/types"
import { useActionState } from "react";
import { validateIpAddress } from "../../util/validate";


export default function InputForm() {

    const formItems: FormItem[] = [
        { label: "IP Address", type: "text", id: "ip-address" },
        { label: "Subnet Mask / CIDR Notation", type: "select", id: "subnet-mask" }
    ]

    const handleSubmit = (_prevState: FormState | null, formData: FormData): FormState | null => {
        const ipAddress = formData.get("ip-address") as string;
        const subnetMask = formData.get("subnet-mask") as string;
/* 
        console.log("IP Address:", ipAddress);
        console.log("Subnet Mask:", subnetMask); */

        const { valid, errors } = validateIpAddress(ipAddress);

        if (!valid) {
            return { ipAddress, subnetMask, errors };
        }

        //console.log(SubnetService.calculate(ipAddress, subnetMask));
        return null;
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