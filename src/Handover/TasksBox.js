import React, {Component} from 'react';
import HandoverService from "./HandoverService";
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class TasksBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            loading: true,
            doctorOfTask: {},
            msg: ''
        }

        this.changeDoctorHandler = this.changeDoctorHandler.bind(this);
        this.handleFollowUp = this.handleFollowUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeDoctorHandler=(event) => {
        var doc = this.state.doctorOfTask;
        doc[event.target.name] = event.target.value;
        this.setState({doctorOfTask: doc});
    }

    checkEntries(id) {
        console.log(this.state.doctorOfTask[id])
        if (this.state.doctorOfTask[id]==="" || this.state.doctorOfTask[id]===undefined) {
            // var warning = this.state.msg;
            // warning[id] = "Please sign off to complete task. -->";
            // this.setState({msg: warning});
            this.setState({msg: "Please sign off to complete task. -->"});
            return false;
        }
        return true;
    }

    handleFollowUp(e) {
        this.props.followUp(e.target.name);
    }

    handleSubmit(e) {
        if(this.checkEntries(e.target.name)) {
            HandoverService.archiveTask(e.target.name).then(res => {
                // Delete from our current list faster than another API call
                HandoverService.getUncompletedTasks().then((res) => {
                    this.setState({tasks: res.data})
                });
            });
        }
    }

    componentDidMount(){
        HandoverService.getUncompletedTasks().then((res) => {
            this.setState({tasks: res.data})
        });
        this.setState({loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div className="text-center">...</div>
        }
        else if (this.state.tasks.length  === 0) {
            return <div className="text-center" style={{fontWeight: "bold", fontSize: "xx-large"}}>No Tasks Handed Over</div>
        }
        return (
            <div style={{background:  '#abdefb', margin: '8%', marginTop: '2%', padding: '2vh'}}>
                {
                    this.state.tasks.map(
                        task =>
                            <div id="containerOneT">
                                <div id="envelope1T">
                                    <Row>
                                        <Col>
                                            <div style={{float: "left", fontWeight: "bold", fontSize: "larger"}}>
                                                Priority: Urgent
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="text-center" style={{fontWeight: "bold", fontSize: "larger"}}>
                                                Task type: {task.taskDescript}
                                            </div>
                                        </Col>
                                        <Col>
                                            <div style={{float: "right", fontWeight: "bold", fontSize: "larger"}}>
                                                Seniority: SHO
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div style={{float: "left"}}>
                                                Patient Name: {task.patient.name}
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="text-center">
                                                MRN Number: {task.patient.numMRN}
                                            </div>
                                        </Col>
                                        <Col>
                                            <div style={{float: "right"}}>
                                                Covid Status: Blue
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div style={{float: "left"}}>
                                                Sex: {task.patient.sex}
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="text-center">
                                                Age: {
                                                Math.floor((new Date() - new Date(task.patient.dob))
                                                    / 31557600000) // 1000ms*60s*60mins*24hours*365.25days
                                                }
                                            </div>
                                        </Col>
                                        <Col>
                                            <div style={{float: "right"}}>
                                                Time Scheduled: 19:20
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div style={{float: "left"}}>
                                                Additional Notes: {task.notes}
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="text-center">
                                                History: {task.taskInfo[1]}
                                            </div>
                                        </Col>
                                        <Col>
                                            <div style={{float: "right"}}>
                                                Task Created by: Dr. {task.doctorOfTask.name}
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            Location: {task.patient.patientLocation}
                                        </Col>
                                        <Col>
                                            <div className="text-center">
                                                <strong>
                                                    <div className="text-danger">
                                                        {this.state.msg}
                                                    </div>
                                                </strong>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div style={{float: "right"}}>
                                                <label style={{float: "right"}}>Sign Off Email Address (*)
                                                    <input type="email" style={{float: "right", marginLeft: "10px"}}
                                                    name={task.id} onChange={this.changeDoctorHandler}/>
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row style={{marginRight: "2%"}}>
                                        <Col>
                                            <button id="archiveButton" name={task.id}
                                                    onClick={null}> Remove Task </button>
                                        </Col>
                                        <Col>
                                            <button id="followUpButton" name={task.id}
                                                    onClick={this.handleFollowUp}>Add follow-up</button>
                                        </Col>
                                        <Col>
                                            <button id="taskDoneButton" name={task.id}
                                                    onClick={this.handleSubmit}>Task Done</button>
                                        </Col>
                                    </Row>
                                    </div>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default TasksBox;