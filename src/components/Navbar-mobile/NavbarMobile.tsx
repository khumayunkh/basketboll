import React from "react";
import './navbarMobile.sass'

function NavbarMobile(){
    return(
        <>
        <div className="mobile_container">
            <div className="mobile_nav">
                <h2 className="mobile_nav_name">KLUB</h2>
                <h2 className="mobile_nav_name">VIJESTI</h2>
                <h2 className="mobile_nav_name">MOMČAD</h2>
                <h2 className="mobile_nav_name">KONTAKT</h2>
            </div>
        </div>
        </>
    )
}

export default NavbarMobile