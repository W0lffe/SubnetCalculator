import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import AdvancedCalculator from './components/AdvancedCalculator/AdvancedCalculator';
import BasicCalculator from './components/BasicCalculator/BasicCalculator';

export default function App() {

  return (
      <div className='flex flex-col h-screen w-screen items-center'>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<Calculator />}>
            <Route index element={<BasicCalculator />} />
<<<<<<< HEAD
            <Route path="subnetting" element={<AdvancedCalculator />} />
=======
            <Route path="advanced" element={<AdvancedCalculator />} />
>>>>>>> 74592bd340e31eebb0e749f54b965caa58134b98
          </Route>
        </Routes>
      </div>
  )
}

