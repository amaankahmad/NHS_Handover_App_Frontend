import React from "react";
import logo from '../logo.svg';
import NHS from '../Asset/NHS.png';
import signup from '../Asset/signup.png';
import doc from '../Asset/doc.png';
import doc2 from '../Asset/doc2.png';
import './Signup.css';
import ReactDOM from "react-dom";
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router';



function HeaderSignUp() {
    return (
        <header>
            <img src={signup} id = "signupLogo" height ={60} alt ="logo signup"/>
            <button id="nhsLogo">
                <img src={NHS}  height={80} alt="logo nhs"/>
            </button>
            <div  id="headerSignUp"><h2> Create a new profile: </h2></div>
        </header>
    );
}
function MainSignUp() {
    let navigate = useNavigate();
    function returnLogIn() {
        navigate('/')
    }

    return (
    <section>
        <div id = "mainBox">

            <div>
                <div className="row"><label><b>Name:</b></label><input type="text"></input></div>
                <div className="row"><label><b>NHS ID:</b></label><input type="text"></input></div>
                <div className="row"><label><b>Email:</b></label><input type="email"></input></div>
                <div className="row"><label><b>Password:</b></label><input type="password"></input></div>
                <div className="row"><label><b>Confirm Password:</b></label><input type="password"></input></div>
                <div className="row">
                    <label htmlFor="role"><b>Role:</b></label>
                    <select name="role" id="role">
                        <option value="empty"></option>
                        <option value="JuniorDoctor">FY</option>
                        <option value="SHO">SHO</option>
                        <option value="Consultant">Spr/Cons</option>
                    </select>
                </div>
            </div>
        </div>
        <img src={doc} id = "docmale" height ={500} alt ="docmale"/>
        <img src={doc2} id = "docfemale" height ={600} alt ="docfemale"/>

        <button id="register">
            Register
        </button>

            <button id="returnLogIn" onClick={returnLogIn}>
                Return to login page
            </button>

    </section>
)
}

function FooterSignUp() {
            return (
            <footer>


            </footer>
            );
        }
function Signup(){
    return (
        <div className="signup">
            <Routes>
            <Route path = "/kim" element={ <>
            <HeaderSignUp />
            <MainSignUp />
            <FooterSignUp />
            </>}/>
            </Routes>
        </div>
    );
}

export default Signup;


