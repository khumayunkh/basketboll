import React from "react";
import './navbar.sass'
import logo from './../../img/logo.png'

function Navbar(){
    return(
        <>
        <div className="nav-container">
            <div className="nav-back"></div>
            <h3 className="nav-title">3.kolo, 2.HMNL, 08.10.2021</h3>
            <div className="nav-klub">
                <div className="nav-klub_1">
                    <img src={logo}/>
                    <h1>5</h1>
                </div>
                <div className="nav-klub_1">
                    <img src={logo}/>
                    <h1>3</h1>
                </div>
            </div>
            <button className="nav-btn">POGLEDAJ</button>
        </div>
        </>
    )
}

export default Navbar