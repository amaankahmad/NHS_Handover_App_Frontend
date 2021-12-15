import './App.css';
import React from 'react';
import DateTime from './DateTime'
import image from "./task icon.png"

export default function WelcomeBanner({name}) {
    return (
        <section>
            <div className="row" style={{margin: "50px"}}>
                <h1 className="col-md-9" style={{color: '#21ACFA', paddingTop: "20px", fontSize: "52px"}}>Hello {name}</h1>
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