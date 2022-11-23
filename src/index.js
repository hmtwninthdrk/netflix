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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes >
    <Route path="/" element = {<App/>}/>
    <Route path="/log" element = {<Auth/>}/>
    <Route path="/login" element = {[<Header/>, <Login/>,<Footer/>] }/>
    

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
