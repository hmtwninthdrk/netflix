import logo from '../components/img/logo.png'
import { Link } from 'react-router-dom';
import React, {useState} from "react";
import Modal from "./Modal/Modal";
const Header = () => {
    const [modalActive,setModalActive]=useState(false)
    return (
        <header className='header'>
            <div className="container">
                <div className="header_inner">
                    <div className="header_left">
                        <img src={logo} alt="" className="logo"/>
                        <ul className="menu">
                            <li><a href="#">Movies</a><button className="modal-btn" onClick={()=>setModalActive(true)}>&#8964;</button></li>
                            <li><a href="#">Serials</a><button className="modal-btn" onClick={()=>setModalActive(true)}>&#8964;</button></li>
                            <li><a href="#">Web series</a><button className="modal-btn" onClick={()=>setModalActive(true)}>&#8964;</button></li>
                            <li><a href="#">Anime</a><button className="modal-btn" onClick={()=>setModalActive(true)}>&#8964;</button></li>
                            <li><a href="#">Selections</a><button className="modal-btn" onClick={()=>setModalActive(true)}>&#8964;</button></li>
                        </ul>
                    </div>
                    <div className="header_right">
                        <form id="form">
                        <input type="search" id="query" name="q" placeholder="Search" className="poisk"/>
                        </form>
                        <button className="btn">Subscribe</button>
                        <Link to = "/log" className="login">LOG IN</Link>
                    </div>
                </div>
            </div>
            <section className="intro">
            </section>
            <Modal active={modalActive} setActive={setModalActive}>
                <table className="table">
                    <tr>
                        <td><a href="">Criminal</a></td>
                        <td><a href="">Fantastic</a></td>
                        <td><a href="">Horror</a></td>
                        <td><a href="">Documental</a></td>
                    </tr>
                    <tr>
                        <td><a href="">Drama</a></td>
                        <td><a href="">Comedy</a></td>
                        <td><a href="">Detectives</a></td>
                        <td><a href="">Family</a></td>
                    </tr>
                    <tr>
                        <td><a href="">Triller</a></td>
                        <td><a href="">Historical</a></td>
                        <td><a href="">Musical</a></td>
                        <td><a href="">Sports</a></td>
                    </tr>
                </table>
            </Modal>
        </header>

    )
}
export default Header;

