import React, {Component, useEffect, useState} from 'react';
import TaskService from "./TaskService";

class CreateNewTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patientName: 'TBD',
            patientMRN: '',
            patientLoc: 'TBD',
            patientDOB: 'TBD',
            patientSex: 'TBD',
            patientCovidStatus: '',
            taskType: '',
            taskPriority: '',
            taskSeniority: 'TBD',
            taskSchedule: 'TBD',
            taskAdditionalNotes: '',
            msg: '',
        }
        this.changePatientNameHandler = this.changePatientNameHandler.bind(this);
        this.changePatientMRNHandler = this.changePatientMRNHandler.bind(this);
        this.changePatientLocHandler = this.changePatientLocHandler.bind(this);
        this.changePatientDOBHandler = this.changePatientDOBHandler.bind(this);
        this.changePatientSexHandler = this.changePatientSexHandler.bind(this);
        this.changePatientCovidStatusHandler = this.changePatientCovidStatusHandler.bind(this);
        this.changeTaskTypeHandler = this.changeTaskTypeHandler.bind(this);
        this.changeTaskPriorityHandler = this.changeTaskPriorityHandler.bind(this);
        this.changeTaskSeniorityHandler = this.changeTaskSeniorityHandler.bind(this);
        this.changeTaskScheduleHandler = this.changeTaskScheduleHandler.bind(this);
        this.changeTaskAdditionalNotesHandler = this.changeTaskAdditionalNotesHandler.bind(this);

        this.handleNewTask = this.handleNewTask.bind(this);

    }

    saveTask = (e) => {
        let pat = {name: this.state.patientName, dob: this.state.patientDOB,
            sex: this.state.patientSex, location: this.state.patientLoc, numMRN: this.state.patientMRN,};
        let doc = {name: "TBD", dob: "TBD", sex: "TBD", email: "TBD", numPager: "TBD", }

        var today = new Date();
        var date = today.getDate() + '/' + (today.getMonth()+1);
        var time = today.getHours() + ':' + today.getMinutes();
        let task = {patient: pat, seniority: this.state.taskSeniority, notes: this.state.taskAdditionalNotes,
            // History will be N/A since this is a new task and not a follow up task
            history: 'N/A', taskDescript: this.state.taskType, creationTime: date+' '+time,};
        // History will be N/A since this is a new task and not a follow up task
        // let task = {notes: this.state.taskAdditionalNotes, creationTime: date+' '+time, history: 'N/A',
        //     seniority: this.state.taskSeniority, taskDescript: this.state.taskType, doctorOfTask: doc, patient: pat};
        console.log('New Task =>' + JSON.stringify(task))

        TaskService.createTask(task).then(res => {});
    }

    changePatientNameHandler=(event) => {
        this.setState({patientName: event.target.value});
    }
    changePatientMRNHandler=(event) => {
        this.setState({patientMRN: event.target.value});
    }
    changePatientLocHandler=(event) => {
        this.setState({patientLoc: event.target.value});
    }
    changePatientDOBHandler=(event) => {
        this.setState({patientDOB: event.target.value});
    }
    changePatientSexHandler=(event) => {
        this.setState({patientSex: event.target.value});
    }
    changePatientCovidStatusHandler=(event) => {
        this.setState({patientCovidStatus: event.target.value});
    }
    changeTaskTypeHandler=(event) => {
        this.setState({taskType: event.target.value});
    }
    changeTaskPriorityHandler=(event) => {
        this.setState({taskPriority: event.target.value});
    }
    changeTaskSeniorityHandler=(event) => {
        this.setState({taskSeniority: event.target.value});
    }
    changeTaskScheduleHandler=(event) => {
        this.setState({taskSchedule: event.target.value});
    }
    changeTaskAdditionalNotesHandler=(event) => {
        this.setState({taskAdditionalNotes: event.target.value});
    }

    checkEntries(e) {
        if (this.state.patientMRN==="" || this.state.patientCovidStatus===""
                || this.state.taskType==="" || this.state.taskPriority === "") {
            this.setState({msg: "Please fill out all required fields (*)."});
            return false;
        }
        return true;
    }

    handleNewTask(e) {
        e.preventDefault(); // Prevent clicking submit with empty args
        console.log(JSON.stringify(this.state))
        if(this.checkEntries()) {
            this.saveTask();
            this.props.home();
        }
    }

    render() {
        return (
            <div>
                <div id="containerOneN">
                    <div id="containerOneLeftN">
                        <div id="patientNameN">
                            <input
                                type="text"
                                placeholder={"Patient Name"}
                                className = "form-control"
                                onChange={this.changePatientNameHandler}
                            />
                        </div>
                        <div id="wardNumberN">
                            <input
                                type="text"
                                placeholder={"Ward #"}
                                className = "form-control"
                                onChange={this.changePatientLocHandler}
                            />
                        </div>
                        <div id="sexN">
                            <p id="sexLabelN">Sex :</p>
                            <div htmlFor="maleN" id="maleLabelN">
                                M
                                <input
                                    type="checkbox" id="maleN" name="M"
                                    value="Male" onChange={this.changePatientSexHandler}/>
                            </div>
                            <label htmlFor="female" id="femaleLabelN">
                                F
                                <input
                                    type="checkbox" id="femaleN" name="F"
                                    value="Female" onChange={this.changePatientSexHandler}/>
                            </label>
                        </div>
                    </div>
                    <div id="containerOneRightN">
                        <div id="MRNNumberN">
                            <input
                                type="text"
                                placeholder={"Patient MRN Number*"}
                                className = "form-control"
                                onChange={this.changePatientMRNHandler}
                            />
                        </div>
                        <div id="DOBN">
                            <input className = "form-control" type="text"
                                   placeholder={"DOB"} onChange={this.changePatientDOBHandler}/>
                        </div>
                        <div id="priorityN">
                            <p id="priorityLabel">Priority* :</p>{" "}
                            <div className="checkLabel">
                                <p htmlFor="High" id="urgentLabelN">
                                    Urgent
                                </p>

                                <input type="checkbox" id="urgentN" name="Urgent"
                                       value = "true" onChange={this.changeTaskPriorityHandler}/>
                            </div>
                            <div className="checkLabel">
                                <p htmlFor="Low" id="nonUrgentLabelN">
                                    Non-Urgent
                                </p>
                                <input
                                    type="checkbox" id="nonUrgentN" name="Non-Urgent"
                                    value = "false" onChange={this.changeTaskPriorityHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <select name="taskType" defaultValue="" id="taskTypeN" onChange={this.changeTaskTypeHandler}>
                        <option value="">Task Type*</option>
                        <option value="completeBloodTest">Complete Blood Test</option>
                        <option value="checkECGXRay">Check ECG/ X-RAY</option>
                        <option value="completeClinicalReview"> Complete Clinical Review </option>
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
                            <input type="checkbox" id="juniorN" name="Junior"
                                   value = "FY" onChange={this.changeTaskSeniorityHandler}/>
                            <p htmlFor="SHO" id="SHOLabelN">
                                SHO
                            </p>
                            <input type="checkbox" id="SHON" name="SHO"
                                   value = "SHO" onChange={this.changeTaskSeniorityHandler}/>
                            {/*<p htmlFor="Consultant" id="consultantLabelN">*/}
                            {/*    Consultant*/}
                            {/*</p>*/}
                            {/*<input type="checkbox" id="consultantN" name="Consultant" />*/}
                        </div>
                        <div id="covidStatusInput">
                            <div id="covidStatus">Covid Status* :</div>{" "}
                            <p htmlFor="redN" id="redLabelN">
                                Red
                            </p>
                            <input type="checkbox" id="redN" name="redN"
                                   value = "true" onChange={this.changePatientCovidStatusHandler}/>
                            <p htmlFor="blueN" id="blueLabelN">
                                Blue{" "}
                            </p>
                            <input type="checkbox" id="blueN" name="blueN"
                                   value = "false" onChange={this.changePatientCovidStatusHandler}/>
                        </div>
                        <div id="scheduleN">
                            {" "}
                            <input className = "form-control" type="text" placeholder={"Schedule"}
                                   onChange={this.changeTaskScheduleHandler}/>
                        </div>
                    </div>
                </div>

                <div id="containerFourN">
                    <div id="additionalNotesBoxN">
                        <input className = "form-control" id="additionalNotesN" type="text"
                               placeholder={"Additional Notes"} onChange={this.changeTaskAdditionalNotesHandler}/>
                    </div>
                </div>
                <div>
                    <strong>
                        <div className="text-danger" id = "entryCheck">
                            {this.state.msg}
                        </div>
                    </strong>
                </div>
                <div id="actionButtons">
                    <div id="addTaskDiv">
                        <button id="AddTaskN" onClick={this.handleNewTask}>Add Task</button>
                    </div>
                    <button id="ReturnToLoginN" onClick={this.props.home}>
                        Go Back
                    </button>
                </div>
            </div>
        );
    }
}

export default CreateNewTask;