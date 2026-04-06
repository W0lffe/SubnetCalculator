import InputForm from "../InputForm/InputForm";
import ResultTable from "../ResultTable/ResultTable";
import { useOutletContext } from "react-router-dom";
import type { SubnetResult } from '../../models/SubnetResult';

type CalculatorContext = {
    setCalculationResult: React.Dispatch<React.SetStateAction<SubnetResult | null>>,
    calculationResult: SubnetResult | null
}

export default function AdvancedCalculator() {
    
    //const { setCalculationResult, calculationResult } = useOutletContext<CalculatorContext>();

    return(
        <div> COMING SOON </div>
    )
}