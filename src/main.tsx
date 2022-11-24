import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from './error-page';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import ScratchPad from './components/ScratchPad';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
