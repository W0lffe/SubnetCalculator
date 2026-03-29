import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Calculator from './pages/Calculator';

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/calc" element={<Calculator />} />
      </Routes>
    </>
  )
}

