import { useState } from 'react';
import InputForm from './components/InputForm/InputForm';
import type { SubnetResult } from './models/SubnetResult';
import ResultTable from './components/ResultTable/ResultTable';
import { Routes } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {

  const [calculationResult, setCalculationResult] = useState<SubnetResult | null>(null);
  //console.log(calculationResult);

  return (
    <div>
     <div className='flex flex-col items-center justify-center'>
      <Header/>
      <InputForm setCalculationResult={setCalculationResult} />
      <ResultTable results={calculationResult} />
    </div>
    <Routes>
      
    </Routes>
    </div>
   
  )
}

export default App
