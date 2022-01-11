import './HandoverScreen.css';
import React from 'react';
import DateTime from '../NewTask/DateTime'
import image from "../Asset/taskIcon.png"
import taskIcon from "../Asset/taskIcon.png";

export default function WelcomeBanner({name}) {
    return (
         <section>
    <div id="welcomeBanner">
        <div id="titleBanner">Hello {name}</div>
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
        </section>
    );
}