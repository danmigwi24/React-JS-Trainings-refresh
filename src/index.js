import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './components/reactRouter/AppRouter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRouter/>} />
      </Routes>

    </BrowserRouter>

    {/* <App /> */}
  </React.StrictMode>
);


