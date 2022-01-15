import './HandoverScreen.css';
// import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router';

// With the buttons, we need to implement the use of the state
// This will be linked with the model to obtain the MyTasks vs AllTasks and switch between pages

export default function BottomNavbar({role}) {
    let navigate = useNavigate() ;
    function returnToLog() {
        navigate('/shift')
    }

    // var secondButton = false;
    // var firstButtonText = 'My Tasks';


    if (role === 'SHO') {
        // secondButton = true;
    }

    return (
        <div id="containerButtons2">
            <>
                <button style={{marginRight:"10px", color: "white", borderColor: "DodgerBlue" ,backgroundColor: "DodgerBlue", borderRadius: "10px", padding: "10px"}}>My Tasks</button>
                <button style={{marginLeft:"10px", color: "white", borderColor: "DodgerBlue" ,backgroundColor: "DodgerBlue", borderRadius: "10px", padding: "10px"}}>All Tasks</button>
                <button onClick={returnToLog} style={{marginLeft:"10px", color: "white", borderColor: "DodgerBlue" ,backgroundColor: "DodgerBlue", borderRadius: "10px" , padding: "10px"}}> Back to Login  </button>
            </>
        </div>
    );
}