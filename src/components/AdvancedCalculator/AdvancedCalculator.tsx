import ResultTable from "../ResultTable/ResultTable";
import type { SubnetResult } from '../../models/SubnetResult';
import { useState } from "react";
import AdvancedInputForm from "../InputForm/AdvancedInputForm";



export default function AdvancedCalculator() {
    
    const [calculationResult, setCalculationResult] = useState<SubnetResult | null>(null);
    
    return(

        <AdvancedInputForm />
    )
}