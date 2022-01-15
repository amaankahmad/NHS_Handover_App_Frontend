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



function FollowUpTask() {
    let navigate = useNavigate() ;
    function returnToList() {
        navigate('/Handover')
    }

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

                <div id="containerOne" >
                    <div id="containerOneLeft">
                        <div id="wardNumber">
                            <input
                                type="text"
                                placeholder={"Ward #"}
                                className="resizedTextBox"
                            />
                        </div>
                    </div>
                    <div id="containerOneRight">
                        <div id="priority">
                            <p id="priorityLabel">Priority :</p>{" "}
                            <div className="checkLabel">
                                <p htmlFor="High" id="urgentLabel">
                                    Urgent
                                </p>

                                <input type="checkbox" id="urgent" name="Urgent" />
                            </div>
                            <div className="checkLabel">
                                <p htmlFor="Low" id="nonUrgentLabel">
                                    Non-Urgent
                                </p>
                                <input
                                    type="checkbox"
                                    id="nonUrgent"
                                    name="Non-Urgent"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                    <div>
                        <select name="taskType" id="taskType">
                            <option value="" disabled selected>
                                Task Type
                            </option>
                            <option value="completeBloodTest">Complete Blood Test</option>
                            <option value="checkECGXRay">Check ECG/ X-RAY</option>
                            <option value="completeClinicalReview">
                                Complete Clinical Review
                            </option>
                            <option value="bespokeTask">Other Task</option>
                        </select>
                    </div>

                    <div id="containerThree">
                        <div id="inputRow">
                            <div id="seniority">
                                Seniority :
                                <p htmlFor="Junior" id="juniorLabel">
                                    FY
                                </p>
                                <input type="checkbox" id="junior" name="Junior" />
                                <p htmlFor="SHO" id="SHOLabel">
                                    SHO
                                </p>
                                <input type="checkbox" id="SHO" name="SHO" />
                                <p htmlFor="Consultant" id="consultantLabel">
                                    Consultant
                                </p>
                                <input type="checkbox" id="consultant" name="Consultant" />
                            </div>
                            <div id="covidStatusInput">
                                <div id="covidStatus">Covid Status :</div>{" "}
                                <p htmlFor="red" id="redLabel">
                                    Red
                                </p>
                                <input type="checkbox" id="red" name="red" />
                                <p htmlFor="blue" id="blueLabel">
                                    Blue{" "}
                                </p>
                                <input type="checkbox" id="blue" name="blue" />
                            </div>
                            <div id="schedule">
                                {" "}
                                <input type="text" placeholder={"Schedule"} />
                            </div>
                        </div>
                    </div>

                    <div id="containerFour">
                        <div id="additionalNotesBox">
                            <input id="additionalNotes" type="text" placeholder={"Additional Notes"} />
                        </div>
                    </div>

                <div id="actionButtonsFollowUp">
                    <div id="addTaskButton">
                        <button id="AddTask">Add Task</button>
                    </div>
                    <button id="ReturnToTaskList" onClick={returnToList}>
                        Return To Task List
                    </button>
                </div>
                    </>}
                />
                </Routes>
                    </div>
    );

}
export default FollowUpTask;