// import React, { Component } from "react";
// import ReactDOM from "react-dom";
//import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { Checkbox } from 'react-bootstrap';
import './FollowUpTask.css';
//import DateTime from './DateTime'
//import taskIcon from './taskIcon.png';
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router';
import taskIcon from '../Asset/taskIcon.png';
import DateTime from '../NewTask/DateTime';
import React from "react";
import CreateFollowUp from "./CreateFollowUp";



function FollowUpTask() {
    let navigate = useNavigate() ;
    function returnToList() {
        navigate('/Handover')
    }

    var taskClickedOn = {patient: {name: "TBD", dob: "TBD", sex: "TBD", location: "TBD", numMRN: "TBD"},
                            seniority: "TBD", notes: "TBD", history: 'N/A', taskDescript: "TBD", creationTime: "TBD"};

    return(
        <div className={"FollowUpTask"}>
            <Routes>
                <Route path="/FollowUpTask" element = {<>
                <div id="headingFollowUp">
                    <div id="titleFollowUp"> FOLLOW UP TASK: </div>
                    <div id="taskIcon">
                        <DateTime />
                        <img
                            src={taskIcon}
                            height={75}
                            alt="taskIcon"
                            id="taskIconImg"
                        />
                </div>
                </div>
                    <CreateFollowUp handover={returnToList} prevTask={taskClickedOn}/>
                    </>}
                />
                </Routes>
                    </div>
    );

}
export default FollowUpTask;