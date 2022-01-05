// import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import { Checkbox } from 'react-bootstrap';
import './NewTask.css';
import DateTime from './DateTime'
import taskIcon from '../Asset/taskIcon.png';
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router';




function NewTask() {
    let navigate = useNavigate() ;
    function returnToLogin(){
        navigate('/shift')
    }
    return(
        <div className={"NewTask"}>
            <Routes>
                <Route path="/NewTask" element = {<>
                    <div >
                        <h1 id="headingN" >
                            NEW TASK:
                            <img src={taskIcon} id = "taskIconN" height ={75} alt ="taskIcon"/>
                        </h1>

                        <div id="containerZeroN" className="container">

                            <DateTime id={"DateTimeN"}/>
                        </div>
                    </div>
                    <div id="containerOneN" className="container">
                        <div id="patientNameN"><input type="text" placeholder={"Patient Name"} className="resizedTextboxN"/>
                        </div>
                        <div id="MRNNumberN"><input type="text" placeholder={"Patient MRN Number"} className="resizedTextboxN"/>
                        </div>
                        <div id="wardNumberN"><input type="text" placeholder={"Ward #"} className="resizedTextboxN"/></div>

                        <div id="DOBN"><input type="text" placeholder={"DOB"}/></div>
                        <div id="sexN">
                            Sex :
                            <input type="checkbox" id="maleN" name="M"/>
                            <label htmlFor="maleN" id="maleLabelN">M</label>
                            <input type="checkbox" id="femaleN" name="F"/>
                            <label htmlFor="female" id="femaleLabelN">F </label>
                        </div>

                        <div id="priorityN">
                            Priority :
                            <input type="checkbox" id="urgentN" name="Urgent"/>
                            <label htmlFor="High" id="urgentLabelN">Urgent </label>
                            <input type="checkbox" id="nonUrgentN" name="Non-Urgent"/>
                            <label htmlFor="Low" id="nonUrgentLabelN">Non-Urgent </label>
                        </div>
                    </div>

                    <div id="containerTwoN" className="container">
                        <div className="btn-group dropdown">
                            <button type="button" id="taskTypeN" className="btn btn-secondary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Task Type
                            </button>
                            <div className="dropdown-menu">
                                <Dropdown.Item href="#/action-1">Complete ECG</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Complete X-RAY</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Complete Clinical Review</Dropdown.Item>
                            </div>
                        </div>
                    </div>

                    <div id="containerThreeN" className="container">
                        <div className="row">

                            <div id="seniority">
                                {"\t"} Seniority  :  {"\t"}
                                <input type="checkbox" id="juniorN" name="Junior"/>
                                <label htmlFor="Junior" id="juniorLabelN">FY{"\t"} </label>
                                {"\t"}
                                <input type="checkbox" id="SHON" name="SHO"/>
                                <label htmlFor="SHO" id="SHOLabelN">SHO {"\t"}</label>
                                {"\t"}
                                <input type="checkbox" id="consultantN" name="Consultant"/>
                                <label htmlFor="Consultant" id="consultantLabelN">Consultant {"\t"} </label>
                                {"\t"}
                            </div>

                            <div id="covidStatus">Covid Status  :</div>
                                <input type="checkbox" id="redN" name="redN"/>
                                <label htmlFor="redN" id="redLabelN">Red {"\t"}</label>
                                {"\t"}
                                <input type="checkbox" id="blueN" name="blueN"/>
                                <label htmlFor="blueN" id="blueLabelN">Blue  </label>
                            <div id="scheduleN" > <input type="text" placeholder={"Schedule"}/></div>
                        </div>
                    </div>

                    <div id="containerFourN" className="container">
                        <p/>
                        Additional Notes
                    </div>
                    <button id="AddTaskN">
                        Add Task
                    </button>
                    <button id="ReturnToLoginN" onClick={returnToLogin}>
                        Done
                    </button>
                </>}/>
            </Routes>
        </div>
    )
}
export default NewTask;
