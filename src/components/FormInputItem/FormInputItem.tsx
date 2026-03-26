import { type FormItem } from "../../models/types";
import { SubnetService } from "../../services/SubnetService"
import { type FormState } from "../../models/types";

interface FormInputItemProps {
    item: FormItem;
    defaultValues: FormState | null;
}

export default function FormInputItem({ item, defaultValues }: FormInputItemProps){

     if (item.type === "select") {
        const subnets = SubnetService.getSubnetsOptions();
        return (
            <div>
                <label htmlFor={item.id}>{item.label}</label>
                <select id={item.id} name={item.id} defaultValue={defaultValues?.subnetMask || ""}>
                    {subnets.map((subnet, i) => (
                        <option key={i} value={subnet}>
                            {subnet}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    return(
        <div>
            <label htmlFor={item.id}>{item.label}</label>
            <input type={item.type} id={item.id} name={item.id} defaultValue={defaultValues?.ipAddress || ""} />
        </div>
    )
}