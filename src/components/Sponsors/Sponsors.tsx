import React from "react";
import './sponsors.sass'
import lion from './../img/lion.png'
import sponsors from './../img/sponsors.png'

function Sponsors(){
    return(
        <>
        <div className="sponsors_container">
            <img src={lion}/>
            <h2 className="sponsors_title">NARANCAST SPONZORI</h2>
            <img src={sponsors}/>
        </div>
        </>
    )
}

export default Sponsors