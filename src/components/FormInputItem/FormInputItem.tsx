import { type FormInputItemProps } from "../../models/types";
import { SubnetService } from "../../services/SubnetService"

const labelStyle = "text-lg md:text-xl font-semibold";
const inputStyle = "border p-1 rounded-sm text-center";
const errorLabelStyle = "text-red-600 animate-pulse";
const spanStyle = "flex flex-row gap-1";

export default function FormInputItem({ item, defaultValues, remainingHosts, onChange }: FormInputItemProps) {

    if (item.type === "select") {
        
        const subnets = remainingHosts === null ? 
            SubnetService.getSubnetsOptions(null) : SubnetService.getSubnetsOptions(remainingHosts);

        return (
            <div className="flex flex-col md:flex-row gap-1">
                {item?.label && 
                    <label htmlFor={item.id} className={labelStyle}>
                        {item.label}
                    </label>
                }
                <select id={item.id} name={item.id} className={inputStyle} defaultValue={subnets[23] || defaultValues?.subnetMask} onChange={(e) => onChange && onChange(e)}>
                    {subnets.map((subnet, i) => (
                        <option key={i} value={subnet}>
                            {subnet}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-1 items-center">
            <span className={spanStyle}>
                {item?.label && 
                    <label htmlFor={item.id} className={labelStyle}>
                        {item?.label}
                    </label>
                }
                <input type={item?.type} 
                    id={item.id} 
                    name={item.id} 
                    defaultValue={defaultValues?.ipAddress || ""} 
                    className={inputStyle} 
                    placeholder="Example: 10.0.0.10" 
                    onChange={(e) => onChange && onChange(e)}
                />
            </span>
            {defaultValues?.errors && <label className={errorLabelStyle}>{defaultValues.errors[0]}</label>}
        </div>
    )
}