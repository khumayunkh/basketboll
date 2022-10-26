import React from "react";
import { NavLink } from "react-router-dom";
import './table.sass'

function Table(){
    return(
        <>
        <div className="table-container">
            <h2>
                <span className="table-title">UTAKMICE</span>
                <span className="table-title-2">TABLICA</span>
            </h2>
            <div className="table-nav">
                <div><NavLink to='/'></NavLink></div>
            </div>
        </div>
        </>
    )
}

export default Table