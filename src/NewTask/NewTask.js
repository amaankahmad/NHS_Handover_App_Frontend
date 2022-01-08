// import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { Checkbox } from 'react-bootstrap';
import "./NewTask.css";
import DateTime from "./DateTime";
import taskIcon from "../Asset/taskIcon.png";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import React from "react";

function NewTask() {
  let navigate = useNavigate();
  function returnToLogin() {
    navigate("/shift");
  }
  return (
    <div className={"NewTask"}>
      <Routes>
        <Route
          path="/NewTask" element={ <>
              <div id="headingNewTask">
                <div id="titleNewTask">NEW TASK: </div>
                <div id="taskIconN">
                  <DateTime />
                  <img
                    src={taskIcon}
                    height={75}
                    alt="taskIcon"
                    id="taskIconImg"
                  />
                </div>
              </div>
              <div id="containerOneN">
                <div id="containerOneLeftN">
                  <div id="patientNameN">
                    <input
                      type="text"
                      placeholder={"Patient Name"}
                      className="resizedTextboxN"
                    />
                  </div>
                  <div id="wardNumberN">
                    <input
                      type="text"
                      placeholder={"Ward #"}
                      className="resizedTextboxN"
                    />
                  </div>
                  <div id="sexN">
                    <p id="sexLabelN">Sex :</p>
                    <div htmlFor="maleN" id="maleLabelN">
                      M
                      <input type="checkbox" id="maleN" name="M" />
                    </div>
                    <label htmlFor="female" id="femaleLabelN">
                      F
                      <input type="checkbox" id="femaleN" name="F" />
                    </label>
                  </div>
                </div>
                <div id="containerOneRightN">
                  <div id="MRNNumberN">
                    <input
                      type="text"
                      placeholder={"Patient MRN Number"}
                      className="resizedTextboxN"
                    />
                  </div>
                  <div id="DOBN">
                    <input type="text" placeholder={"DOB"} />
                  </div>
                  <div id="priorityN">
                    <p id="priorityLabel">Priority :</p>{" "}
                    <div className="checkLabel">
                      <p htmlFor="High" id="urgentLabelN">
                        Urgent
                      </p>

                      <input type="checkbox" id="urgentN" name="Urgent" />
                    </div>
                    <div className="checkLabel">
                      <p htmlFor="Low" id="nonUrgentLabelN">
                        Non-Urgent
                      </p>
                      <input
                        type="checkbox"
                        id="nonUrgentN"
                        name="Non-Urgent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <select name="taskType" id="taskTypeN">
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

              <div id="containerThreeN">
                <div id="inputRow">
                  <div id="seniority">
                    Seniority :
                    <p htmlFor="Junior" id="juniorLabelN">
                      FY
                    </p>
                    <input type="checkbox" id="juniorN" name="Junior" />
                    <p htmlFor="SHO" id="SHOLabelN">
                      SHO
                    </p>
                    <input type="checkbox" id="SHON" name="SHO" />
                    <p htmlFor="Consultant" id="consultantLabelN">
                      Consultant
                    </p>
                    <input type="checkbox" id="consultantN" name="Consultant" />
                  </div>
                  <div id="covidStatusInput">
                    <div id="covidStatus">Covid Status :</div>{" "}
                    <p htmlFor="redN" id="redLabelN">
                      Red
                    </p>
                    <input type="checkbox" id="redN" name="redN" />
                    <p htmlFor="blueN" id="blueLabelN">
                      Blue{" "}
                    </p>
                    <input type="checkbox" id="blueN" name="blueN" />
                  </div>
                  <div id="scheduleN">
                    {" "}
                    <input type="text" placeholder={"Schedule"} />
                  </div>
                </div>
              </div>

              <div id="containerFourN">
                <div id="additionalNotesBoxN">
                  <input id="additionalNotesN" type="text" placeholder={"Additional Notes"} />
                </div>
              </div>
              <div id="actionButtons">
                <div id="addTaskDiv">
                  <button id="AddTaskN">Add Task</button>
                </div>
                <button id="ReturnToLoginN" onClick={returnToLogin}>
                  Done
                </button>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default NewTask;
