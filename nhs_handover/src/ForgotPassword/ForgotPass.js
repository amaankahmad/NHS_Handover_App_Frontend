import "../index.css"
import React from "react";
import {Routes, Route} from "react-router-dom";
import "./ForgotPassword.css" ;
import signup from "../Asset/signup.png";
import NHS from "../Asset/NHS.png";
import {useNavigate} from 'react-router';

function MainForgotPass() {
   let navigate = useNavigate() ;
   function backToLogin() {
       navigate('/')
   }
    return (
       <div id="BOX" >
         <div id="sousBox" >
           <div id = "ForgotPassword"> FORGOT PASSWORD? </div>
         </div>
           <div id ="text"> Please enter the email you would like your password reset information sent to </div>
           <div id ="text2"> Enter email address: </div>
           <div id="emailBox"> <input type="email" /> </div>
           <button id = "request"> Request Reset Link </button>
           <button id = "return" onClick = {backToLogin}> Return To LogIn page </button>
       </div>
);

}

function ForgotPassword(){
    return(
        <div className={"ForgotPassword"}>
            <Routes>
                <Route path="/ForgotPassword" element={ <>
                    <MainForgotPass />
                </>}/>
            </Routes>
        </div>
    );
}
export default ForgotPassword;