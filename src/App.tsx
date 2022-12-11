import './App.css';
import Header from './components/Header';
import HomeScreen from './components/home/Homescreen';
import ScratchPad from './components/scratchpad/ScratchPad';
import Todos from './components/todos/Todos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import '@fontsource/roboto-flex';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/scratchpad" element={<ScratchPad />}></Route>
          <Route path="/todos" element={<Todos />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
