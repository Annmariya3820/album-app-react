import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Delete from './components/Delete';
import Searcg from './components/Searcg';
import View from './components/View';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>} />
      <Route path='/Delete' element={<Delete/>} />
      <Route path='/Searcg' element={<Searcg/>} />
      <Route path='/view' element={<View/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
