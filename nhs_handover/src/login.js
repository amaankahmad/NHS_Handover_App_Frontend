import React, {useState} from 'react';
import './login.css';
import handover_logo from "./handover_logo.jpeg";
import imperial_logo from "./imperiallogo.png";
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
function Login(){
    return(
        <div className={"login"}>
            <Header />
            <Main/>
            <Footer/>
        </div>
    );
}
export default Login;
