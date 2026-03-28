import ipaddr from "ipaddr.js";
import { type ValidationResult } from "../models/types";

export const validateIpAddress = (ip: string): ValidationResult => {

    let errors: ValidationResult["errors"] = [];

    if (ip.length === 0) {
        errors.push("IP address is required!");
    }

    if (ip.length > 0 && !ipaddr.isValid(ip) || !validateIpFormat(ip)) {
        errors.push("Invalid IP address format!");
    }

    return {
        valid: errors.length === 0 ? true : false,
        errors
    };
};

const validateIpFormat = (ip: string): boolean => {

    const octets = ip.split(".");
    //console.log(octets)
    if(octets.length !== 4) return false;

    return true;
}