import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Calculator from './pages/Calculator';
import Home from './pages/Home';

export default function App() {

  return (
      <div className='flex flex-col h-screen w-screen items-center'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calc" element={<Calculator />} />
        </Routes>
      </div>
  )
}

