import './App.css';
import React from 'react';
import DateTime from './DateTime'
import image from "./logo.svg"

export default function WelcomeBanner({name}) {
    return (
        <div className="App">
            <h1 style={{color: 'lightblue'}}>Hello {name}</h1>
            <DateTime/>
            <img src={image} height={200} alt={"Handover Task Screen"}/>
        </div>
    );
}