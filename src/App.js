import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Modal from "./components/Modal/Modal"
import {useState} from "react";


function App() {
    return (
        <>
            <Header/>
            <Intro/>
            <Main/>
            <Footer/>


        </>
    )
}

export default App
