import FormInputItem from "../FormInputItem/FormInputItem";
import { type FormItem, type FormState } from "../../models/types"
import { useActionState } from "react";
import { validateIpAddress } from "../../util/validate";
import type { SubnetResult } from "../../models/SubnetResult";
import { SubnetService } from "../../services/SubnetService";

type InputFormProps = {
        setCalculationResult: React.Dispatch<
            React.SetStateAction<SubnetResult | null>
        >;
    };

export default function InputForm({ setCalculationResult }: InputFormProps) {

    const formItems: FormItem[] = [
        { label: "IP Address", type: "text", id: "ip-address" },
        { label: "Subnet Mask / CIDR Notation", type: "select", id: "subnet-mask" }
    ]

    const handleSubmit = (_prevState: FormState | null, formData: FormData): FormState | null => {
        const ipAddress = formData.get("ip-address") as string;
        const subnetMask = formData.get("subnet-mask") as string;
       
        const { valid, errors } = validateIpAddress(ipAddress);

        if (!valid) {
            return { ipAddress, subnetMask, errors };
        }

        const result = SubnetService.calculate(ipAddress, subnetMask);
        setCalculationResult(result);
      
        return null;
    }
    
    const reset = (event: any) => {
        event.preventDefault();
        setCalculationResult(null);
    }

    const [formData, formAction] = useActionState(handleSubmit, null);

    return (
        <div>
            <form action={formAction}>
                {formItems.map((item, i) =>
                    <FormInputItem key={i} item={item} defaultValues={formData} />
                )}
                <button type="submit">Calculate</button>
                <button onClick={(event) => reset(event)}>Reset</button>
            </form>
        </div>

    )
}