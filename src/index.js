import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppMain from './components/reactRouter/AppMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppMain/>} />
      </Routes>

    </BrowserRouter>

    {/* <App /> */}
  </React.StrictMode>
);





/*
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/danmigwi74/React-JS-Trainings-refresh.git
git push -u origin main

git add .
git commit -am "React Refresh"
git push
*/
