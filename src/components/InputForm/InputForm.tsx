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

const divStyle = "w-full flex flex-col border-b border-b-gray-400/50 shadow-sm shadow-black/10";
const formStyle = "w-full flex flex-col items-center gap-2";
const spanStyle = "flex flex-row gap-5 p-3";
const buttonStyle = "shadow-sm shadow-black/40 p-1 hover:px-2 hover:border-b-red-600 hover:border-b-2 rounded-sm hover:bg-linear-to-b hover:from-gray-200/10 hover:to-gray-400/25 transition-all duration-150 text-lg";



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
        <div className={divStyle}>
            <form action={formAction} className={formStyle}>
                {formItems.map((item, i) =>
                    <FormInputItem key={i} item={item} defaultValues={formData} />
                )}
                <span className={spanStyle}>
                    <button type="submit" className={buttonStyle}>Calculate</button>
                    <button onClick={(event) => reset(event)} className={buttonStyle}>Reset</button>
                </span>
            </form>
        </div>

    )
}