import "../index.css"
import React from "react";
import {Routes, Route} from "react-router-dom";
import handover_logo from "../Asset/handover_logo.jpeg";
import imperial_logo from "../Asset/imperiallogo.png";
import "./ForgotPassword.css" ;
import {useNavigate} from 'react-router';

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

function MainForgotPass() {
   let navigate = useNavigate() ;
   function backToLogin() {
       navigate('/')
   }
    return (

<section id="signinForm">
<div className="form-images">
    <div id="form">
        <div id="headerSignIn">
            <h2> Forgot Password? </h2>
        </div>


        <div id="mainBoxL">

            <div className="row">
                <label>
                    <b>Enter email address:</b>
                </label>
                <input type="email"></input>
            </div>

        <div id="actionButtonsSignUp">
            <button id="button1">
                Request Reset Link
            </button>

            <button id="button2"  onClick={backToLogin}>
            Return To Login page
            </button>

        </div>
    
        </div>
    </div>
</div>
</section>
);

}

function ForgotPassword(){
    return(
        <div className={"ForgotPassword"}>
            <Routes>
                <Route path="/ForgotPassword" element={ <>
                    <Header />
                    <MainForgotPass />
                </>}/>
            </Routes>
        </div>
    );
}
export default ForgotPassword;