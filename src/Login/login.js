import React, {useState} from 'react';
import './login.css';
import handover_logo from "../Asset/handover_logo.jpeg";
import imperial_logo from "../Asset/imperiallogo.png";
import sun from "../Asset/sun.png";
import moon from "../Asset/moon.png";
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router';

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
    function handleClick() {
        navigate('/shift')
    }
    function handleClick2() {
        navigate('/ForgotPassword')
    }
    function handleClick3() {
        navigate('/Signup')
    }

    return(
    <section id="signinForm">
        <div className="form-images">
            <div id="form">
                <div id="headerSignIn">
                    <h2> Login Page </h2>
                </div>


                <div id="mainBoxL">

                    <div className="row">
                        <label>
                            <b>NHS Email:</b>
                        </label>
                        <input type="email" onChange={getData}/>
                    </div>

                    <div className="row">
                        <label>
                            <b>Password:</b>
                        </label>
                        <input type="password"></input>
                    </div>



                <div id="actionButtons">
                    <button id="button1" onClick={handleClick}>
                        Login
                    </button>

                    <button id="button2"  onClick={handleClick2}>
                        Forgot Password
                    </button>

                    <button id="button3" onClick={handleClick3}  >
                        Sign up
                    </button>

                </div>
            
                </div>
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
   function handleClick4() {
       navigate('/NewTask')
   }
    function handleClick5() {
        navigate('/Handover')
    }
    return(
        <section>
<p></p>
            <div>
            <button id="buttonSun" onClick={handleClick4} style={{backgroundColor:'White'}}>
                <figure>
                <img src={sun} height={180} alt="sun"/>
                    <figcaption>
                        Ending Day Shift
                    </figcaption>
                </figure>
            </button>
            <button id="buttonMoon" onClick={handleClick5} style={{backgroundColor:'White'}}>
                <figure>
                <img src={moon} height={180} alt="moon"/>
                    <figcaption>
                        Start Evening Shift
                    </figcaption>
                </figure>
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
                </>}/>
            </Routes>
        </div>
    );
}
export default Login;
