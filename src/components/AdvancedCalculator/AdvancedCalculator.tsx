import ResultTable from "../ResultTable/ResultTable";
import type { SubnetResult } from '../../models/SubnetResult';
import { useState } from "react";
import InputForm from "../InputForm/InputForm";



export default function AdvancedCalculator() {
    
    const [calculationResult, setCalculationResult] = useState<SubnetResult | SubnetResult[] | null>(null);

    return(
        <>
        <InputForm setCalculationResult={setCalculationResult} isBasic={false} />
        <ResultTable results={calculationResult} />
        </>
    )
}