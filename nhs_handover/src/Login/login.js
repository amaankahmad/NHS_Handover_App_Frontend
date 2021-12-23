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
            <img src={handover_logo} id="ourLogo" height={80} alt="logo"/>
            <img src={imperial_logo} id="nhsLogo" height={50} alt="logo"/>
            <h1>Login Page</h1>
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
    return(
        <div id = "mainBoxL">

            {/*<section style={{backgroundColor:'lightskyblue'}}>*/}

            <p>NHS ID: <input type="text" onChange={getData}/></p>
            <p>Password: <input type="password"/></p>

        {/*</section>*/}
    </div>
    )

}
function Footer(){
    let navigate = useNavigate();
    function handleClick() {
        navigate('/shift')
    }
    function handleClick2() {
        navigate('/ForgotPassword')
    }
    function handleClick3() {
        navigate('/kim')
    }


    return(

        <footer>
            <button id="button1" onClick={handleClick} style={{backgroundColor:'lightskyblue'}}>
                Login
            </button>
            <button id="button2"  onClick={handleClick2}  style={{backgroundColor:'lightskyblue'}}>
                Forgot Password
            </button>
            <p></p>
            <button id="button3" onClick={handleClick3}  style={{backgroundColor:'lightskyblue'}}>
                Sign up
            </button>
        </footer>
    )
}
function Header2(){
    return(

        <header>
            <img src={handover_logo} id="ourLogo" height={80} alt="logo"/>
            <img src={imperial_logo} id="nhsLogo" height={50} alt="logo"/>
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
            <button id="buttonSun" onClick={handleClick4} style={{backgroundColor:'lightskyblue'}}>
                <figure>
                <img src={sun} height={180} alt="sun"/>
                    <figcaption>
                        Ending Day Shift
                    </figcaption>
                </figure>
            </button>
            <button id="buttonMoon" onClick={handleClick5} style={{backgroundColor:'lightskyblue'}}>
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
