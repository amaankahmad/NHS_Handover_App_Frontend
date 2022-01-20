import React, {useState} from 'react';
import './Login.css';
import handover_logo from "../Asset/handover_logo.jpeg";
import imperial_logo from "../Asset/imperiallogo.png";
import sun from "../Asset/sun.png";
import moon from "../Asset/moon.png";
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router';
import LoginDoctor from "./LoginDoctor";

function Header(props){
    return(

        <header>
            <div className="header">
            <img src={handover_logo} id="ourLogo" height={100} alt="logo"/>
            <img src={imperial_logo} id="nhsLogo" height={80} alt="logo"/>
            
            </div>
        </header>

    )
}

function Main(){

    const [data,setData]=useState(null)
    function getData(val)
    {
        setData(val.target.value)
        console.warn(val.target.value)
    }
    let navigate = useNavigate();
    function navigateToShift() {
        navigate('/shift')
    }
    function navigateToForgotPassword() {
        navigate('/ForgotPassword')
    }
    function navigateToSignUp() {
        navigate('/Signup')
    }

    return(
    <section id="signinForm">
        <div className="form-images">
            <div id="form">
                <div id="headerSignIn">
                    <h2> Login Page </h2>
                </div>
                    <LoginDoctor login = {navigateToShift} signUp = {navigateToSignUp} forgotPassword = {navigateToForgotPassword}/>
            </div>
        </div>
    </section>
    
    )

}
function Footer(){

    return(

        <footer>
        </footer>
    )
}
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

function Main2(){
    let navigate = useNavigate() ;
   function navigateToNewTask() {
       navigate('/NewTask')
   }
    function navigateToHandover() {
        navigate('/Handover')
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

function Login(){
    return(
        <div className={"login"}>
            <Routes>
            <Route path="/" element={ <>
            <Header />
            <Main/>
            <Footer/>
            </>}/>

                <Route path="/shift" element={ <>
                    <Header2 />
                    <Main2/>
                    {/*<div className="container">*/}
                    {/*    <Header2 />*/}
                    {/*    <ListPersonsComponent/>*/}
                    {/*</div>*/}
                </>}/>
            </Routes>
        </div>
    );
}
export default Login;
