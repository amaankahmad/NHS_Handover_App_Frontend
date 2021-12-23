import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Checkbox } from 'react-bootstrap';
import './NewTask.css';
import DateTime from './DateTime'
import taskIcon from '../Asset/taskIcon.png';
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router';



function NewTask() {
    return(
        <div className={"NewTask"}>
            <Routes>
                <Route path="/NewTask" element = {<>
            <div >
                <h1 style={{color:'#21ACFA', margin: "15px 0",paddingLeft: "160px"}}>
                    NEW TASK:
                    <img src={taskIcon} id = "taskIcon" height ={50} alt ="taskIcon"/>
                </h1>

                <div id="containerZero" className="container">

                    <DateTime id={"DateTime"}/>
                </div>
            </div>
            <div id="containerOne" className="container">
                <div className="container" style={{background:'#ABDEFB', margin: "10px 0",paddingLeft: "50px" }} >
                    <div className="row" style={{margin: "10px 0",alignment:"center",paddingLeft: "0px"}}>
                        <div className="col-2" id="patientName" style={{margin: "10px 0" }}> <input type="text" placeholder={"Patient Name"}/></div>
                        <div className="col-2" id="MRNNumber" style={{ margin: "10px 0" }}> <input type="text" placeholder={"Patient MRN Number"}/></div>
                        <div className="col-2" id="NHSNumber" style={{ margin: "10px 0" }}> <input type="text" placeholder={"Patient NHS Number"}/> </div>
                        <div className="col-2" id="wardNumber" style={{margin: "10px 0" }}> <input type="text" placeholder={"Ward #"}/></div>
                        <div className="col-4" id="bedNumber" style={{ margin: "10px 0" }}> <input type="text" placeholder={"Bed #"}/></div>
                    </div>


                    <div className="row" style={{margin: "10px 0",paddingLeft: "15px"}}>
                        <div className="col-4" id="DOB" style={{margin: "10px 0" ,paddingLeft: "0px"}}> <input type="text" placeholder={"DOB"}/></div>
                        <div className="col-4" style={{margin: "10px 0" ,paddingLeft: "0px",color:'black'}}>
                                {"\t"} Sex  :  {"\t"}
                            <input type="checkbox" id="Female" name="F"/>
                                <label htmlFor="Female">F {"\t"} </label>
                            {"\t"}
                            <input type="checkbox" id="Male" name="M"/>
                                <label htmlFor="Female">M {"\t"}</label>
                        </div>

                        <div className="col-4" style={{margin: "10px 0" ,paddingLeft: "0px",color:'black'}}>
                                {"\t"} {"\t"} Priority  :  {"\t"}
                            <input type="checkbox" style={{margin:"0px"}} id="High" name="High"/>
                                <label htmlFor="High" style={{paddingLeft:"0px"}}>High {"\t"}</label>
                            {"\t"}
                            <input type="checkbox" style={{marginRight:"0px", paddingLeft:"5px"}} id="Low" name="Low"/>
                                <label htmlFor="Low" style={{paddingLeft:"0px"}}>Low  </label>
                        </div>
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
                <div className="container" style={{background: '#DDEFFA', margin: "10px 0", alignment: 'left'}}>
                    <div className="row">

                        <div className="col-4" style={{margin: "10px 0" ,color:'black'}}>
                            {"\t"} Seniority  :  {"\t"}
                            <input type="checkbox" id="Junior" name="Junior"/>
                            <label htmlFor="Junior">Junior{"\t"} </label>
                            {"\t"}
                            <input type="checkbox" id="SHO" name="SHO"/>
                            <label htmlFor="SHO">SHO {"\t"}</label>
                            {"\t"}
                            <input type="checkbox" id="Consultant" name="Consultant"/>
                            <label htmlFor="Consultant">Consultant {"\t"} </label>
                            {"\t"}
                        </div>

                        <div className="col-4" style={{margin: "10px 0" ,paddingLeft: "0px",color:'black'}}>
                            {"\t"} {"\t"} Covid Status  :  {"\t"}
                            <input type="checkbox" style={{marginRight:"2px"}} id="Positive" name="Positive"/>
                            <label htmlFor="Positive" style={{paddingLeft:"0px"}}>Positive {"\t"}</label>
                            {"\t"}
                            <input type="checkbox" style={{marginRight:"0px", paddingLeft:"0px"}} id="Negative" name="Negative"/>
                            <label htmlFor="Negative" style={{paddingLeft:"2px"}}>Negative  </label>
                        </div>
                        <div className="col-4" style={{margin: "10px 0" ,paddingLeft: "00px"}}> <input type="text" placeholder={"Schedule"}/></div>
                    </div>
                </div>
            </div>

            <div id="containerFour" className="container">
                <div style={{color: 'black', background: '#DDEFFA'}}>
                    <h2>Additional Notes </h2>
                    -<p/>
                    -<p/>
                    -<p/>
                    -<p/>
                </div>
            </div>
            <button id="AddTask">
                    Add Task
            </button>
                </>}/>
                    </Routes>
                    </div>
    )
}
export default NewTask;