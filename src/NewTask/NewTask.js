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
import CreateNewTask from "./CreateNewTask";

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
              <CreateNewTask home={returnToLogin}/>
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default NewTask;
