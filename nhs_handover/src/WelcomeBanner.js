import './App.css';
import React from 'react';
import DateTime from './DateTime'

export default function WelcomeBanner({name}) {
    return (
        <div className="App">
            <h1 style={{color: 'lightblue'}}>Hello {name}</h1>
            <DateTime/>
        </div>
    );
}