import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Auth from './pages/Auth';
import Header from './components/Header';
import Login from './components/Auth/Login';
import Footer from './components/Footer';
import StrangerTh from './pages/StrangerTh';
import Sherlock from './pages/Sherlock';
import DeathNote from './pages/DeathNote';
import Moviesall from './pages/Moviesall';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes >
    <Route path="/" element = {<App/>}/>
    <Route path="/log" element = {<Auth/>}/>
    <Route path='/str' element={<StrangerTh/>} />
    <Route path='/sherlock' element={<Sherlock/>} />
    <Route path='/dth' element={<DeathNote/>} />
    <Route path='/movies' element={<Moviesall/>} />
    <Route path="/login" element = {[<Header/>, <Login/>,<Footer/>] }/>
    

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
