import { useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import type { SubnetResult } from './models/SubnetResult';
import ResultTable from './components/ResultTable/ResultTable';

function App() {

  const [calculationResult, setCalculationResult] = useState<SubnetResult | null>(null);
  //console.log(calculationResult);

  return (
    <div className='flex flex-col items-center justify-center'>
      <InputForm setCalculationResult={setCalculationResult} />
      <ResultTable results={calculationResult} />
    </div>
  )
}

export default App
