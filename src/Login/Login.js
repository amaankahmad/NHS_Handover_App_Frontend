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
    function navigateToShift(docName) {
        navigate('/shift', {state: {name: docName}})
    }
    function navigateToForgotPassword() {
        navigate('/ForgotPassword')
    }
    function navigateToSignUp() {
        navigate('/Signup')
    }
    function navigateToConsultant(docName) {
        navigate('/Consultant', {state: {name: docName}})
    }

    return(
    <section id="signinForm">
        <div className="form-images">
            <div id="form">
                <div id="headerSignIn">
                    <h2> Login Page </h2>
                </div>
                    <LoginDoctor login = {navigateToShift} signUp = {navigateToSignUp}
                                 forgotPassword = {navigateToForgotPassword} consultantPage={navigateToConsultant}/>
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

function Login(){
    return(
        <div className={"login"}>
            <Routes>
            <Route path="/" element={ <>
            <Header />
            <Main/>
            <Footer/>
            </>}/>
            </Routes>
        </div>
    );
}
export default Login;
