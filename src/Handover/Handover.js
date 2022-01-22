import './HandoverScreen.css';
import WelcomeBanner from "./WelcomeBanner";
import PageTitle from "./PageTitle";
import TasksBox from "./TasksBox";
import {Routes, Route} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import React from "react";

function Handover() {
    let location= useLocation();
    // console.log(location.state);

    let navigate = useNavigate();
    function navigateToFollowUp(data) {
        navigate('/FollowUpTask', {state: {id: data}})
    }

    if (!location.state) {
        return <div>...</div>
    }

    return (
         <div className={"Handover"}>
             <Routes>
                 <Route path="/Handover" element = {<>

            {/* Modularising the code such that we can just import Bottom Navbar whenever needed as a template */}
            <WelcomeBanner name={location.state.name}/>
            <PageTitle role={"Junior Doctor"}/>
            <TasksBox followUp={navigateToFollowUp}/>
                 </>}/>
             </Routes>
         </div>
    );
}

export default Handover;
