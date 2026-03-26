export type FormItem = {
    label: string;
    type: "text" | "select";
    id: string;
}

export type FormState = {
    ipAddress: string;
    subnetMask: string;
};