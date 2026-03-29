export type FormItem = {
    label: string;
    type: "text" | "select";
    id: string;
}

export type FormState = {
        ipAddress: string;
        subnetMask: string;
        errors?: string[];
    };

export type ValidationResult = {
  valid: boolean;
  errors: string[];
};