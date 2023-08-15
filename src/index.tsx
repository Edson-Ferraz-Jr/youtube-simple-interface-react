import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InterfaceStorage } from './contexts/interfaceContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <InterfaceStorage>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </InterfaceStorage>
);
