import React from "react";
import  './header.sass'
import background from './../img/background.png'
import {Nav} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
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
                    <Nav>
                        <NavDropdown
                            className="header_menu__navbar__name"
                            title="MOMČAD"
                        >
                        <NavDropdown.Item className="header_menu__navbar__dropdown" href="#action/3.1">igrači</NavDropdown.Item>
                        <NavDropdown.Item className="header_menu__navbar__dropdown" href="#action/3.2">stožer</NavDropdown.Item>
                        <NavDropdown.Item className="header_menu__navbar__dropdown" href="#action/3.3">utakmice</NavDropdown.Item>
                        <NavDropdown.Item className="header_menu__navbar__dropdown" href="#action/3.4">tablica</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <h2 className="header_menu__navbar__name">KONTAKT</h2>
                </div>
                <div className="header_menu_info">
                    <div className="header_menu_info_title">
                        <div className="header_menu_info_title_triangle-left"></div>
                        <h2 className="header_menu_info_title_name">KLUB</h2>
                    </div>
                    <div className="header_menu_info_sub">
                        <h3>VELIKA POBJEDA U SPLITU</h3>
                        <button className="header_menu_info_sub_btn">POGLEDAJ</button>
                    </div>
                </div>
                <div className="header_menu_arrow">
                    <div className="header_menu_arrow_1">
                        <h1 className="header_menu_arrow_1_icon">&#8592;</h1>
                    </div>
                    <div className="header_menu_arrow_2">
                    <h1 className="header_menu_arrow_2_icon">&#8594;</h1>
                    </div>
                </div>
            </div>    
        </div>
        </>
    )
}

export default Header