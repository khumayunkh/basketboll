import React from "react";
import { NavLink } from "react-router-dom";
import './table.sass'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navbar from "./navbar/Navbar";

function Table(){
    return(
        <>
        <div className="table-container">
            <h2 className="table-title">
                <span className="table-title_1">UTAKMICE</span>
                <span className="table-title_2">TABLICA</span>
            </h2>
            <div className="table-nav">
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3">
                    <Tab eventKey="home" title="ZADNJA">
                        <Navbar/>
                    </Tab>
                    <Tab eventKey="profile" title="IDUĆA">
                        <Navbar/>
                    </Tab>
                    <Tab eventKey="contact" title="TABLICA">
                        <Navbar/>
                    </Tab>
                </Tabs>
            </div>
            <div className="table-tablica">
                <div className="table-tablica_back"></div>
                <div className="table-klubs">
                    <h3 className="table-klubs_position">1.</h3>
                    <h3>ŠIBENIK 1983</h3>
                    <h3 className="table-klubs_score">24</h3>
                </div>
                <div className="table-klubs">
                    <h3 className="table-klubs_position">2.</h3>
                    <h3>ŠIBENIK 1983</h3>
                    <h3 className="table-klubs_score">21</h3>
                </div>
                <div className="table-klubs">
                    <h3 className="table-klubs_position">3.</h3>
                    <h3>ŠIBENIK 1983</h3>
                    <h3 className="table-klubs_score">19</h3>
                </div>
                <div className="table-klubs">
                    <h3 className="table-klubs_position">4.</h3>
                    <h3>ŠIBENIK 1983</h3>
                    <h3 className="table-klubs_score">16</h3>
                </div>
                <div className="table-klubs">
                    <h3 className="table-klubs_position">5.</h3>
                    <h3>ŠIBENIK 1983</h3>
                    <h3 className="table-klubs_score">15</h3>
                </div>
                <div className="table-klubs">
                    <h3 className="table-klubs_position">6.</h3>
                    <h3>ŠIBENIK 1983</h3>
                    <h3 className="table-klubs_score">13</h3>
                </div>
                <div className="table-klubs">
                    <h3 className="table-klubs_position">7.</h3>
                    <h3>ŠIBENIK 1983</h3>
                    <h3 className="table-klubs_score">6</h3>
                </div>
                <div className="table-klubs">
                    <h3 className="table-klubs_position">8.</h3>
                    <h3>ŠIBENIK 1983</h3>
                    <h3 className="table-klubs_score">4</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Table