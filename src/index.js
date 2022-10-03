/* eslint-disable react/jsx-pascal-case */
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
import Mk_2 from './pages/Mk_2';
import Mk_4_5 from './pages/Mk_4_5';
import Mk_12 from './pages/Mk_12';
import RegistroPage from './pages/RegistroPage'
import Principal from './pages/Principal'
import ListaResena from './pages/ListaResena'
import HistorialOrden from './pages/HistorialOrden'

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
      <Route path='/login' element={<Mk_2 />}/>
      <Route path='/formularioOne' element={<Mk_4_5 />}/>
      <Route path='/Componentes' element={<Mk_12 />}/>
      <Route path='/registro' element={<RegistroPage /> }/>
      <Route path='/principal' element={<Principal/> }/>
      <Route path='/ListaResena' element={<ListaResena />}/>
      <Route path='/HistorialdeOrden' element={<HistorialOrden/>}/> 
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
