import InputForm from "../InputForm/InputForm";
import ResultTable from "../ResultTable/ResultTable";
import type { SubnetResult } from '../../models/SubnetResult';
import { useState } from "react";

export default function BasicCalculator() {

    const [calculationResult, setCalculationResult] = useState<SubnetResult | SubnetResult[] | null>(null);

    return(
        <>
            <InputForm setCalculationResult={setCalculationResult} isBasic={true} />
            <ResultTable results={calculationResult} />
        </>
    )
}