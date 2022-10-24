import React from "react";
import  './header.sass'
import background from './../img/background.png'
import logo from './../img/logo.png'

function Header(){
    return(
        <>
        <div className="header_container">
            <img className="header_backround" src={background}/>
            <div className="header_menu">
                <div className="header_menu__navbar">
                    <div className="header_menu__navbar__logo">
                        <img className="header_menu__navbar__logo__img" src={logo}/>
                        <h1 className="header_menu__navbar__logo__title">Šibenik 1983</h1>
                    </div>
                    <h2 className="header_menu__navbar__name">KLUB</h2>
                    <h2 className="header_menu__navbar__name">VIJESTI</h2>
                    <h2 className="header_menu__navbar__name">MOMČAD</h2>
                    <h2 className="header_menu__navbar__name">KONTAKT</h2>
                </div>
            </div>    
        </div>
        </>
    )
}

export default Header