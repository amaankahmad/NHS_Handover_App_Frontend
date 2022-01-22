import React from "react";
import { Routes, Route } from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import handover_logo from "../Asset/handover_logo.jpeg";
import imperial_logo from "../Asset/imperiallogo.png";
import sun from "../Asset/sun.png";
import moon from "../Asset/moon.png";

function Header2(){
    return(

        <header>
            <div className="header">
                <img src={handover_logo} id="ourLogo" height={100} alt="logo"/>
                <img src={imperial_logo} id="nhsLogo" height={80} alt="logo"/>
            </div>
        </header>

    )
}

function Main2(doc){
    let navigate = useNavigate() ;
    function navigateToNewTask() {
        navigate('/NewTask', {state: {name: doc.name}})
    }
    function navigateToHandover() {
        navigate('/Handover', {state: {name: doc.name}})
    }
    function returnToLogIn() {
        navigate('/')
    }
    return(
        <section>
            <p></p>
            <div>
                <button id="buttonSun" onClick={navigateToNewTask} style={{backgroundColor:'White'}}>
                    <figure>
                        <img src={sun} height={180} alt="sun"/>
                        <figcaption>
                            Ending Day Shift
                        </figcaption>
                    </figure>
                </button>
                <button id="buttonMoon" onClick={navigateToHandover} style={{backgroundColor:'White'}}>
                    <figure>
                        <img src={moon} height={180} alt="moon"/>
                        <figcaption>
                            Start Evening Shift
                        </figcaption>
                    </figure>
                </button>
                <button id="buttonSignOut" onClick={returnToLogIn}  >
                    Sign out
                </button>
            </div>

        </section>

    )
}

function Shift() {
    let location= useLocation();
    // console.log(location.state);

    if (!location.state) {
        return <div>...</div>
    }

    return (
        <div>
            <Routes>
                <Route path="/shift" element={ <>
                     <Header2 />
                     <Main2 name={location.state.name} />
                 </>}/>
            </Routes>
        </div>
    );
}

export default Shift;
