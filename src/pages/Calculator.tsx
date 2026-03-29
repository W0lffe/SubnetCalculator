import ResultTable from '../components/ResultTable/ResultTable';
import InputForm from '../components/InputForm/InputForm';
import type { SubnetResult } from '../models/SubnetResult';
import { useState } from 'react';

export default function Calculator(){

    const [calculationResult, setCalculationResult] = useState<SubnetResult | null>(null);

    return(
        <div>
            <InputForm setCalculationResult={setCalculationResult} />
            <ResultTable results={calculationResult} />
        </div>
    )
}