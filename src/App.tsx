import './App.css';
import Header from './components/Header';

import HomeScreen from './components/Homescreen';
import ScratchPad from './components/ScratchPad';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/scratchpad" element={<ScratchPad />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
