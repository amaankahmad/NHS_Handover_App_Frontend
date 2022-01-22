import React, {Component} from 'react';
import FollowUpTaskService from "./FollowUpTaskService";
import HandoverService from "../Handover/HandoverService";
import TaskService from "../NewTask/TaskService";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class CreateFollowUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            oldTask: {},
            doctorCreatedBy: '',
            patientCovidStatus: '',
            taskType: '',
            taskPriority: '',
            taskSeniority: 'TBD',
            taskSchedule: 'TBD',
            taskAdditionalNotes: '',
            msg: '',
        }
        this.changeDoctorHandler = this.changeDoctorHandler.bind(this);
        this.changeUpdatePatientLocHandler = this.changeUpdatePatientLocHandler.bind(this);
        this.changeUpdatePatientCovidStatusHandler = this.changeUpdatePatientCovidStatusHandler.bind(this);
        this.changeFollowUpTaskTypeHandler = this.changeFollowUpTaskTypeHandler.bind(this);
        this.changeFollowUpTaskPriorityHandler = this.changeFollowUpTaskPriorityHandler.bind(this);
        this.changeFollowUpTaskSeniorityHandler = this.changeFollowUpTaskSeniorityHandler.bind(this);
        this.changeFollowUpTaskScheduleHandler = this.changeFollowUpTaskScheduleHandler.bind(this);
        this.changeFollowUpTaskAdditionalNotesHandler = this.changeFollowUpTaskAdditionalNotesHandler.bind(this);

        this.handleFollowUp = this.handleFollowUp.bind(this);

    }

    saveTask = (e) => {
        // var today = new Date();
        // var date = today.getDate() + '/' + (today.getMonth()+1);
        // var time = today.getHours() + ':' + today.getMinutes();
        //
        // let newTask = {patient: this.state.oldTask.patient, seniority: "FY",
        //     notes: this.state.taskAdditionalNotes, history: this.state.oldTask.taskDescript+' completed.',
        //     // History will be N/A since this is a new task and not a follow up task
        //     taskDescript: this.state.taskType, creationTime: date+' '+time,};
        //
        // console.log(JSON.stringify(this.state.oldTask))
        // console.log(JSON.stringify(newTask))

        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth()+1);
        var time = today.getHours() + ':' + today.getMinutes();
        let newTask = {patient: this.state.oldTask, seniority: this.state.taskSeniority, notes: this.state.taskAdditionalNotes,
            // History will be N/A since this is a new task and not a follow up task
            history: "None", taskDescript: this.state.taskType,
            creationTime: (date+' '+time), schedule: this.state.taskSchedule,
            covidStatus: this.state.patientCovidStatus, urgency: this.state.taskPriority, createdBy: this.state.doctorCreatedBy};
        console.log('New Task =>' + JSON.stringify(newTask))

        HandoverService.archiveTask(this.props.prevTask).then(res => {});
        TaskService.createTask(newTask).then(res => {});

    }

    changeDoctorHandler=(event) => {
        this.setState({doctorCreatedBy: event.target.value});
    }
    changeUpdatePatientLocHandler=(event) => {
        this.setState({patientLoc: event.target.value});
    }
    changeUpdatePatientCovidStatusHandler=(event) => {
        var val;
        if(event.target.value) {
            val = "Red"
        }
        else{
            val = "Blue"
        }
        this.setState({patientCovidStatus: val});
    }
    changeFollowUpTaskTypeHandler=(event) => {
        this.setState({taskType: event.target.value});
    }
    changeFollowUpTaskPriorityHandler=(event) => {
        var val;
        if(event.target.value) {
            val = "Urgent"
        }
        else{
            val = "Non-urgent"
        }
        this.setState({taskPriority: val});
    }
    changeFollowUpTaskSeniorityHandler=(event) => {
        this.setState({taskSeniority: event.target.value});
    }
    changeFollowUpTaskScheduleHandler=(event) => {
        this.setState({taskSchedule: event.target.value});
    }
    changeFollowUpTaskAdditionalNotesHandler=(event) => {
        this.setState({taskAdditionalNotes: event.target.value});
    }

    checkEntries(e) {
        if (this.state.patientCovidStatus==="" || this.state.taskType==="" || this.state.taskPriority === ""
            || this.state.doctorCreatedBy==="") {
            this.setState({msg: "Please fill out all required fields (*)."});
            return false;
        }
        return true;
    }

    handleFollowUp(e) {
        if(this.checkEntries()) {
            this.saveTask();
            this.props.handover(this.state.doctorCreatedBy);
        }
    }

    componentDidMount(){
        FollowUpTaskService.getTask(this.props.prevTask).then((res) => {
            this.setState({oldTask: res.data})});
    }

    render() {
        return (
            <div>
                <div id="containerOne" >
                    <div id="containerOneLeft">
                        <div id="wardNumber">
                            <input
                                type="text"
                                placeholder={"Ward #"}
                                className = "form-control"
                                onChange={this.changeUpdatePatientLocHandler}
                            />
                        </div>
                    </div>
                    <div id="containerOneRight">
                        <div id="priority">
                            <p id="priorityLabel">Priority* :</p>{" "}
                            <div className="checkLabel">
                                <p htmlFor="High" id="urgentLabel">
                                    Urgent
                                </p>

                                <input type="checkbox" id="urgent" name="Urgent"
                                       value="true" onChange={this.changeFollowUpTaskPriorityHandler}/>
                            </div>
                            <div className="checkLabel">
                                <p htmlFor="Low" id="nonUrgentLabel">Non-Urgent</p>
                                <input
                                    type="checkbox" id="nonUrgent" name="Non-Urgent"
                                    value="false" onChange={this.changeFollowUpTaskPriorityHandler}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <select name="taskType" id="taskType" onChange={this.changeFollowUpTaskTypeHandler}>
                        <option value="">Task Type*</option>
                        <option value="Complete Blood Test">Complete Blood Test</option>
                        <option value="Check ECG or X-Ray">Check ECG/ X-RAY</option>
                        <option value="Complete Clinical Review"> Complete Clinical Review </option>
                        <option value="Bespoke Task">Other Task</option>
                    </select>
                </div>

                <div id="containerThree">
                    <div id="inputRow">
                        <div id="seniority">
                            Seniority :
                            <p htmlFor="Junior" id="juniorLabel">
                                FY
                            </p>
                            <input type="checkbox" id="junior" name="Junior"
                                   value="FY" onChange={this.changeFollowUpTaskSeniorityHandler}/>
                            <p htmlFor="SHO" id="SHOLabel">
                                SHO
                            </p>
                            <input type="checkbox" id="SHO" name="SHO"
                                   value="SHO" onChange={this.changeFollowUpTaskSeniorityHandler}/>
                        </div>
                        <div id="covidStatusInput">
                            <div id="covidStatus">Covid Status* :</div>{" "}
                            <p htmlFor="red" id="redLabel">
                                Red
                            </p>
                            <input type="checkbox" id="red" name="red"
                                    value="true" onChange={this.changeUpdatePatientCovidStatusHandler}/>
                            <p htmlFor="blue" id="blueLabel">
                                Blue{" "}
                            </p>
                            <input type="checkbox" id="blue" name="blue"
                                   value="false" onChange={this.changeUpdatePatientCovidStatusHandler}/>
                        </div>
                        <div id="schedule">
                            {" "}
                            <input className = "form-control" type="text" placeholder={"Schedule"}
                            onChange={this.changeFollowUpTaskScheduleHandler}/>
                        </div>
                    </div>
                </div>
                <div id="containerFour">
                    <div id="additionalNotesBox">
                        <input className = "form-control" id="additionalNotes" type="text"
                               placeholder={"Additional Notes"} onChange={this.changeFollowUpTaskAdditionalNotesHandler}/>
                    </div>
                </div>
                <div>
                    <strong>
                        <div className="text-danger" id = "entryCheck">
                            {this.state.msg}
                        </div>
                    </strong>
                </div>
                <Row className="text-center">
                    <Col>
                        <div>
                            <label style={{float: "right", marginTop: "10px"}}>Sign Off Name (*)
                                <input type="email" style={{float: "right", marginLeft: "10px"}}
                                       onChange={this.changeDoctorHandler}/>
                            </label>
                        </div>
                    </Col>
                    <Col>
                        <button style={{float: "left"}} id="AddTask" onClick={this.handleFollowUp}>Add Task</button>
                    </Col>
                    {/*<Col>*/}
                    {/*    <button id="ReturnToTaskList" onClick={this.props.handover}>*/}
                    {/*        Return To Task List*/}
                    {/*    </button>*/}
                    {/*</Col>*/}
                </Row>
            </div>
        );
    }
}

export default CreateFollowUp;