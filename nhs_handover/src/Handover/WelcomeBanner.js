import './HandoverScreen.css';
import React from 'react';
import DateTime from '../NewTask/DateTime'
import image from "../Asset/taskIcon.png"

export default function WelcomeBanner({name}) {
    return (
        <section>
            <div className="row" style={{margin: "50px"}}>
                <h1 id="welcomeName" style={{color: '#21ACFA', paddingTop: "20px", fontSize: "52px"}}>Hello {name}</h1>
                <div id="dateTimeImg">
                    <img src={image} height={75} alt={"Handover Task Screen"}/>
                </div>
                <div id="dateTime">
                    <DateTime style={{float:'right'}}/>
                </div>
            </div>
        </section>
    );
}