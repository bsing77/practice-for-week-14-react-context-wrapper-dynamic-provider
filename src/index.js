import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HoroscopeContext } from './context/HoroscopeContext';
import { HoroScopeProvider } from './context/HoroscopeContext';

const Root = () => {
  return (
    <HoroScopeProvider>
      <App />
    </HoroScopeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);