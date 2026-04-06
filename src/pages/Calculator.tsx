import type { SubnetResult } from '../models/SubnetResult';
import { useState } from 'react';
import ModeSelector from '../components/ModeSelector/ModeSelector';
import { Outlet } from "react-router-dom";

const divStyle = 'w-screen md:w-1/2 h-fit md:h-screen flex flex-col items-center p-2 md:gap-5';

export default function Calculator() {

    const [calculationResult, setCalculationResult] = useState<SubnetResult | null>(null);

     return (
        <div className={divStyle}>
            <ModeSelector />
            <Outlet context={{setCalculationResult, calculationResult}}/>
        </div>
    )

}