import './HandoverScreen.css';
import BottomNavbar from "./BottomNavbar";
import WelcomeBanner from "./WelcomeBanner";
import PageTitle from "./PageTitle";
import TasksBox from "./TasksBox";
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router';


function Handover() {
    return (
         <div className={"Handover"}>
             <Routes>
                 <Route path="/Handover" element = {<>

            {/* Modularising the code such that we can just import Bottom Navbar whenever needed as a template */}
            <WelcomeBanner name="Dr. House"/>
            <PageTitle role={"Junior Doctor"}/>
            <TasksBox/>
            <BottomNavbar role={"Junior Doctor"}/>
                 </>}/>
             </Routes>
         </div>
    );
}

export default Handover;
