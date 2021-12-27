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
// import { useNavigate } from 'react-router';



function NewTask() {
    return(
        <div className={"NewTask"}>
            <Routes>
                <Route path="/NewTask" element = {<>
                    <div >
                        <h1 id="headingN" >
                            NEW TASK:
                            <img src={taskIcon} id = "taskIconN" height ={50} alt ="taskIcon"/>
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
                            <input type="checkbox" id="femaleN" name="F"/>
                            <label htmlFor="female" id="femaleLabelN">F </label>
                            <input type="checkbox" id="maleN" name="M"/>
                            <label htmlFor="maleN" id="maleLabelN">M</label>
                        </div>

                        <div id="priorityN">
                            Priority :
                            <input type="checkbox" id="HighN" name="High"/>
                            <label htmlFor="High">High </label>
                            <input type="checkbox" id="LowN" name="Low"/>
                            <label htmlFor="Low">Low </label>
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

                            <div className="col-6">
                                {"\t"} Seniority  :  {"\t"}
                                <input type="checkbox" id="JuniorN" name="Junior"/>
                                <label htmlFor="Junior">Junior{"\t"} </label>
                                {"\t"}
                                <input type="checkbox" id="SHON" name="SHO"/>
                                <label htmlFor="SHO">SHO {"\t"}</label>
                                {"\t"}
                                <input type="checkbox" id="ConsultantN" name="Consultant"/>
                                <label htmlFor="Consultant">Consultant {"\t"} </label>
                                {"\t"}
                            </div>

                            <div className="col-4">
                                {"\t"} {"\t"} Covid Status  :  {"\t"}
                                <input type="checkbox" style={{marginRight:"2px"}} id="PositiveN" name="Positive"/>
                                <label htmlFor="Positive" style={{paddingLeft:"0px"}}>Positive {"\t"}</label>
                                {"\t"}
                                <input type="checkbox" style={{marginRight:"0px", paddingLeft:"0px"}} id="NegativeN" name="Negative"/>
                                <label htmlFor="Negative" style={{paddingLeft:"2px"}}>Negative  </label>
                            </div>
                            <div className="col-4" style={{margin: "10px 0" ,paddingLeft: "00px"}}> <input type="text" placeholder={"Schedule"}/></div>
                        </div>
                    </div>

                    <div id="containerFourN" className="container">
                        <p/>
                        Additional Notes
                        <p/>
                        -<p/>
                        -<p/>
                        -<p/>
                    </div>
                    <button id="AddTaskN">
                        Add Task
                    </button>
                </>}/>
            </Routes>
        </div>
    )
}
export default NewTask;
