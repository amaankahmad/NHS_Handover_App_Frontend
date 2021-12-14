import React, {useState} from 'react';
import './login.css';
import handover_logo from "./handover_logo.jpeg";
import imperial_logo from "./imperiallogo.png";
import sun from "./sun.png";
import moon from "./moon.png";
import {Routes, Route} from "react-router-dom";

function Header(props){
    return(

        <header>
            <img src={handover_logo} height={80} alt="logo"/>
            <img src={imperial_logo} height={50} alt="logo"/>
            <h1 style={{color:'lightBlue'}}>Login Page</h1>
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
        <section style={{backgroundColor:'lightblue'}}>

            <p>NHS ID: <input type="text" onChange={getData}/></p>
            <p>Password: <input type="text"/></p>

        </section>
    )
}
function Footer(){
    return(
        <footer>
            <button style={{backgroundColor:'lightblue'}}>
                Login
            </button>
            <button style={{backgroundColor:'lightblue'}}>
                Forgot Password
            </button>
            <p></p>
            <button style={{backgroundColor:'lightblue'}}>
                Sign up
            </button>
        </footer>
    )
}
function Header2(){
    return(

        <header>
            <img src={handover_logo} height={80} alt="logo"/>
            <img src={imperial_logo} height={50} alt="logo"/>
        </header>

    )
}

function Main2(){
    return(

        <section>
            <img src={sun} height={200} alt="sun"/>
            <img src={moon} height={200} alt="moon"/>
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
