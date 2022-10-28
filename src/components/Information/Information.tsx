import React from "react";
import './information.sass'
import klub from './../img/klub.png'
import vijesti from './../img/vijesti.png'
import momcad from './../img/momcad.png'
import stadium from './../img/background.png'

function Information(){
    return(
        <>
        <div className="information-container">
            <div className="information-info">
                <div className="information-info-item1">
                    <img src={klub}/>
                    <div>
                    <div className="information-info_title">
                        <div className="information-info_title_triangle-left"></div>
                        <h2 className="information-info_title_name">KLUB</h2>
                    </div>
                    <h3>FUNCUTI ISPUNILI DVORANU</h3></div>
                </div>
                <div className="information-info-item2">
                    <img src={vijesti}/>
                   <div className="information-info_mobile_version"><div className="information-info_title">
                        <div className="information-info_title_triangle-left"></div>
                        <h2 className="information-info_title_name2">VIJESTI</h2>
                    </div>
                    <h4>Funcuti pozivaju na Šubičevac!</h4>
                    </div> 
                </div>
                <div className="information-info-item3">
                    <img className="information-info-stadium" src={stadium}/>
                </div>
                <div className="information-info-item4">
                    <img src={momcad}/>
                    <div className="information-info_mobile_version"><div className="information-info_title">
                        <div className="information-info_title_triangle-left"></div>
                        <h2 className="information-info_title_name2">MOMČAD</h2>
                    </div>
                    <h4>Trener Strunje o novim igračima</h4></div>
                </div>
                <div className="information-info-item5">
                    <img src={momcad}/>
                    <div className="information-info_mobile_version"><div className="information-info_title">
                        <div className="information-info_title_triangle-left"></div>
                        <h2 className="information-info_title_name2">MOMČAD</h2>
                    </div>
                    <h4>Trener Strunje o novim igračima</h4></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Information