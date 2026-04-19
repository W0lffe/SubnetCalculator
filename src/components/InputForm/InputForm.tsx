import FormInputItem from "../FormInputItem/FormInputItem";
import { type FormItem, type FormState } from "../../models/types"
import { useActionState } from "react";
import { validateIpAddress } from "../../util/validate";
import type { SubnetResult } from "../../models/SubnetResult";
import { SubnetService } from "../../services/SubnetService";

type InputFormProps = {
        setCalculationResult: React.Dispatch<
            React.SetStateAction<SubnetResult | SubnetResult[] | null>
        >;
        isBasic: boolean
};

const divStyle = "w-full flex flex-col border-b border-b-gray-400/50 shadow-sm shadow-black/10";
const formStyle = "w-full flex flex-col items-center gap-2";
const spanStyle = "flex flex-row gap-5 p-3";
const buttonStyle = `shadow-sm shadow-black/40 p-1 hover:px-2 hover:border-b-red-600 hover:border-b-2 
                    rounded-sm hover:bg-linear-to-b hover:from-gray-200/10 
                    hover:to-gray-400/25 transition-all duration-150 text-lg`;



export default function InputForm({ setCalculationResult, isBasic }: InputFormProps) {

    const initialValue: FormState | null =  isBasic 
    
    ? null : {
        ipAddress: "10.0.1.0",
        subnetMask: ""
    }
   
    const formItems: FormItem[] = [
        { label: isBasic ? "IP Address" : "Network Address", type: "text", id: "ip-address" },
        { label: "Subnet Mask / CIDR Notation", type: "select", id: "subnet-mask" }
    ]

    const handleSubmit = (_prevState: FormState | null, formData: FormData): FormState | null => {
        const ipAddress = formData.get("ip-address") as string;
        const subnetMask = formData.get("subnet-mask") as string;
       
        const { valid, errors } = validateIpAddress(ipAddress);

        if (!valid) {
            return { ipAddress, subnetMask, errors };
        }
        
        let result = null;
        if(isBasic){
            result = SubnetService.calculateFull(ipAddress, subnetMask);
        }
        else{
            let hosts = 256;
            const networks = [];
            const firstSubnet = SubnetService.calculateFull(ipAddress, subnetMask);
            networks.push(firstSubnet);
            hosts -= firstSubnet.hosts;

            while(hosts > 0){
                const latestSubnet = networks[networks.length - 1];
                const splitAddress = latestSubnet.broadcastAddress.split(".").map(num => parseInt(num));
                splitAddress[3] += 1;
                if(splitAddress[3] > 255){
                    break;
                }

                const nextIpAddress = splitAddress.join(".");

                const nextSubnet = SubnetService.calculateFull(nextIpAddress, subnetMask);
                //console.log(nextSubnet);
                networks.push(nextSubnet);
                hosts -= nextSubnet.hosts;
            }
            
            //console.log(networks)
            result = networks;

        }

        setCalculationResult(result);
        return null;
    }
    
    const reset = (event: any) => {
        event.preventDefault();
        setCalculationResult(null);
    }

    const [formData, formAction] = useActionState(handleSubmit, initialValue);

    return (
        <div className={divStyle}>
            <form action={formAction} className={formStyle}>
                {formItems.map((item, i) =>
                    <FormInputItem key={i} item={item} 
                                    defaultValues={formData} 
                                    remainingHosts={isBasic ? null : 256} 
                                    onChange={null}
                                />
                )}
                <span className={spanStyle}>
                    <button type="submit" className={buttonStyle}>Calculate</button>
                    <button onClick={(event) => reset(event)} className={buttonStyle}>Reset</button>
                </span>
            </form>
        </div>

    )
}