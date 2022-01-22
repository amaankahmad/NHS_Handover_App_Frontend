import './HandoverScreen.css';
import React from 'react';
import DateTime from '../NewTask/DateTime'
import image from "../Asset/taskIcon.png"
import taskIcon from "../Asset/taskIcon.png";
import {useNavigate} from "react-router";

export default function WelcomeBanner({name}) {
    let navigate = useNavigate() ;
    function returnToShift() {
        navigate('/shift')
    }
    return (
         <section>
            <div id="welcomeBanner">
                <div id="titleBanner">Hello Dr. {name}</div>
                <div id="taskIconW">
                    <DateTime />
                    <img
                        src={image}
                        height={75}
                        alt="taskIcon"
                        id="taskIconImgW"
                    />
                </div>
            </div>
             {/*<button onClick={returnToShift} style={{float: "right", marginTop: "20px", marginRight: "20px",*/}
             {/*    color: "white", borderColor: "DodgerBlue" ,backgroundColor: "DodgerBlue", borderRadius: "10px" ,*/}
             {/*    padding: "10px"}}> Back to Login  </button>*/}
         </section>
    );
}