import ResultTable from '../components/ResultTable/ResultTable';
import InputForm from '../components/InputForm/InputForm';
import type { SubnetResult } from '../models/SubnetResult';
import { useState } from 'react';

const divStyle = 'w-screen md:w-1/2 h-fit md:h-screen flex flex-col items-center p-2 md:gap-5';

export default function Calculator(){

    const [calculationResult, setCalculationResult] = useState<SubnetResult | null>(null);

    return(
        <div className={divStyle}>
            <InputForm setCalculationResult={setCalculationResult} />
            <ResultTable results={calculationResult} />
        </div>
    )
}