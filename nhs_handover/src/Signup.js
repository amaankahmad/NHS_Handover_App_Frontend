import React from "react";
import logo from './logo.svg';
import './App.css';
import NHS from './NHS.png';
import signup from './signup.png';
import doc from './doc.png';
import doc2 from './doc2.png';
import './Signup.css';
import ReactDOM from "react-dom";


function Header() {
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
function Main() {
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
                        <option value="juniorDoctor">Junior Doctor</option>
                        <option value="sho">SHO</option>
                        <option value="consultant">Consultant</option>
                    </select>
                </div>
            </div>
        </div>
        <img src={doc} id = "docmale" height ={500} alt ="docmale"/>
        <img src={doc2} id = "docfemale" height ={600} alt ="docfemale"/>

        <button id="register">
            Register
        </button>

            <button id="returnLogin" onClick={returnlogin()}>
                Return to login page
            </button>

    </section>
)
}

function Footer() {
            return (
            <footer>


            </footer>
            );
        }
function Signup(){
    return (
        <div className="signup">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
function returnlogin() {
    // ReactDOM.render(
    //     <Login />,
    // );
}

export default Signup;


