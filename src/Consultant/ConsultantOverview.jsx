import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ConsultantService from "./ConsultantService";

class ConsultantOverview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uncompleted: [],
            completed: [],
            loading: true,
        }
    }

    componentDidMount(){
        ConsultantService.getUncompletedTasks().then((res) => {
            this.setState({uncompleted: res.data})
        });
        ConsultantService.getCompletedTasks().then((res) => {
            this.setState({completed: res.data})
        });
        this.setState({loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div className="text-center">...</div>
        }
        else if (this.state.uncompleted.length === 0 && this.state.completed.length === 0) {
            return <div className="text-center" style={{fontWeight: "bold", fontSize: "xx-large"}}>No Tasks Handed Over Yet</div>
        }
        // return (
        //     <div className="text-center" style={{fontWeight: "bold", fontSize: "xx-large"}}>
        //         {console.log(this.state.uncompleted)},
        //         Testing
        //     </div>
        // )
        return (
            <div style={{background:  '#abdefb', margin: '8%', marginTop: '2%', padding: '2vh'}}>
                {console.log(this.state.uncompleted)}
                {
                    this.state.uncompleted.map(
                        task =>
                            <div id="containerOneT">
                                <div id="envelope1T">
                                    <Row>
                                        <Col>
                                            <div style={{float: "left", fontWeight: "bold", fontSize: "larger"}}>
                                                Priority: Non Urgent
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="text-center" style={{fontWeight: "bold", fontSize: "larger"}}>
                                                Task type: {task.taskDescript}
                                            </div>
                                        </Col>
                                        <Col>
                                            <div style={{float: "right", fontWeight: "bold", fontSize: "larger",
                                                backgroundColor: 'red', color: 'white', padding: '10px'}}>
                                                Status: Incomplete
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
                                                Covid Status: {task.covidStatus}
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
                                                Time Scheduled: {task.time}
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
                                </div>
                            </div>
                    )
                }
            </div>
        );
    }
}

export default ConsultantOverview;