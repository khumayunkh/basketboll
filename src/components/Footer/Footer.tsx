import React from "react";
import './footer.sass'
import logo from './../img/logo.png'

function Footer(){
    return(
        <>
        <div className="footer_container">
            <img className="footer_logo" src={logo}/>
            <h3 className="footer_title">
               <span>Karlovačka 37,</span>
               <span>22000 Šibenik</span>
               <span>Hrvatska</span>
               <span>OIB 388234322</span>
            </h3>
        </div>
        </>
    )
}
export default Footer