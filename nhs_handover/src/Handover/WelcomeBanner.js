import './HandoverScreen.css';
import React from 'react';
import DateTime from '../NewTask/DateTime'
import image from "../Asset/taskIcon.png"

export default function WelcomeBanner({name}) {
    return (
        <section>
            <div className="row" style={{margin: "50px"}}>
                <h1 className="col-md-9" style={{color: '#21ACFA', paddingTop: "20px",fontSize: "52px", position:"relative" , left:"1%"}}>Hello {name}</h1>
                <div className="col-md-2">
                    <DateTime style={{float:'right'}}/>
                </div>
                <div className="col-md-1">
                    <img src={image} height={75} alt={"Handover Task Screen"}/>
                </div>
            </div>
        </section>
    );
}