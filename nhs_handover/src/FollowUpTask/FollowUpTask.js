import React, { Component } from "react";
import ReactDOM from "react-dom";
//import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Checkbox } from 'react-bootstrap';
import './FollowUpTask.css';
//import DateTime from './DateTime'
//import taskIcon from './taskIcon.png';
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router';
import taskIcon from '../Asset/taskIcon.png';
import DateTime from '../NewTask/DateTime';



function FollowUpTask() {
    return(
        <div className={"FollowUpTask"}>
            <Routes>
                <Route path="/FollowUpTask" element = {<>
            <div >
                <h1 id="heading">
                    FOLLOW UP TASK:
                    <img src={taskIcon} id = "taskIcon" height ={50} alt ="taskIcon"/>
                </h1>

                <div id="containerZero" className="container">
                    <DateTime id={"DateTime"}/>
                </div>
            </div>
            <div  className="container">
                <div id="containerOne" className="container"  >
                    <div className="row" >
                        <div className="col-9" style={{margin: "2.5% 0",paddingLeft:"10%" ,color:'black'}}>
                            {"\t"} {"\t"} Priority  :  {"\t"}
                            <input type="checkbox" id="High" name="High"/>
                            <label htmlFor="High" style={{paddingLeft:"1%"}}>Urgent {"\t"}</label>
                            {"\t"}
                            <input type="checkbox" id="Low" name="Low"/>
                            <label htmlFor="Low" style={{paddingLeft:"1%"}}>Non-Urgent  </label>
                        </div>
                        <div className="col-3" id="wardNumber" style={{margin: "1.5% 0" }}> <input type="text" placeholder={"Ward #"}/></div>
                    </div>
                </div>
            </div>

            <div id="containerTwo" className="container">
                <div className="btn-group dropdown">
                    <button type="button" id="taskType" className="btn btn-secondary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Task Type
                    </button>
                    <div className="dropdown-menu">
                        <Dropdown.Item href="#/action-1">Complete ECG</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Complete X-RAY</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Complete Clinical Review</Dropdown.Item>
                    </div>
                </div>
            </div>

            <div id="containerThree" className="container">
                <div className="container" >
                    <div className="row">

                        <div className="col-4" style={{margin: "2% 0",paddingLeft: "5%" ,color:'black'}}>
                            {"\t"} Seniority  :  {"\t"}
                            <input type="checkbox" id="Junior" name="Junior"/>
                            <label htmlFor="Junior" style={{paddingLeft: "1%"}}>Junior{"\t"} </label>
                            {"\t"}
                            <input type="checkbox" id="SHO" name="SHO"/>
                            <label htmlFor="SHO" style={{paddingLeft: "1%"}}>SHO {"\t"}</label>
                            {"\t"}
                            <input type="checkbox" id="Consultant" name="Consultant"/>
                            <label htmlFor="Consultant" style={{paddingLeft: "1%"}}>Consultant {"\t"} </label>
                            {"\t"}
                        </div>

                        <div className="col-4" style={{margin: "2% 0" ,paddingLeft: "5%",color:'black'}}>
                            {"\t"} {"\t"} Covid Status  :  {"\t"}
                            <input type="checkbox" id="Positive" name="Positive"/>
                            <label htmlFor="Positive" style={{paddingLeft: "1%"}}>Positive {"\t"}</label>
                            {"\t"}
                            <input type="checkbox" id="Negative" name="Negative"/>
                            <label htmlFor="Negative" style={{paddingLeft: "1%"}}>Negative  </label>
                        </div>
                        <div className="col-4" style={{margin: "2% 0" ,paddingLeft: "5%"}}> {"\t"} {"\t"} Schedule  :  {"\t"} <input type="text" placeholder={"Done By..."}/></div>
                    </div>
                </div>
            </div>

            <div id="containerFour" className="container" style={{color: 'black', background: '#DDEFFA'}}>
                <h2>Additional Notes </h2>
            </div>
            <button id="AddTask">
                Add Task
            </button>
                    </>}/>
                </Routes>
                    </div>
    )

}
export default FollowUpTask;