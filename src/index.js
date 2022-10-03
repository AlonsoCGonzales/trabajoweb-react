import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Requets from './pages/Requets';
import Gamming from './pages/Gamming';
import Busqueda from './pages/Busqueda';
import Ofimatica from './pages/Ofimatica';
import Programing from './pages/Programing';
import Ranking from './pages/Ranking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><Routes>
      <Route path='/' element={<Busqueda />}/>
      <Route path='/Gamming' element={<Gamming />}/>
      <Route path='/Ofimatica' element={<Ofimatica />}/>
      <Route path='/Programing' element={<Programing />}/>
      <Route path='/Requets' element={<Requets />}/>
      <Route path='/Ranking' element={<Ranking />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
