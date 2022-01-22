import './HandoverScreen.css';
import WelcomeBanner from "./WelcomeBanner";
import PageTitle from "./PageTitle";
import TasksBox from "./TasksBox";
import {Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router";

function Handover() {
    let navigate = useNavigate();
    function navigateToFollowUp(data) {
        navigate('/FollowUpTask', {state: {id: data}})
    }

    return (
         <div className={"Handover"}>
             <Routes>
                 <Route path="/Handover" element = {<>

            {/* Modularising the code such that we can just import Bottom Navbar whenever needed as a template */}
            <WelcomeBanner name="Dr. House"/>
            <PageTitle role={"Junior Doctor"}/>
            <TasksBox followUp={navigateToFollowUp}/>
                 </>}/>
             </Routes>
         </div>
    );
}

export default Handover;
