import React, {Component} from 'react';
import HandoverService from "./HandoverService";

class TasksBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            loading: true
        }
    }

    componentDidMount() {
        HandoverService.getUncompletedTasks().then((res) => {
            this.setState({tasks: res.data})
        // HandoverService.getUncompletedTasks()
        });
        this.setState({loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div>...</div>
        }
        return (
            <div style={{background:  '#abdefb', margin: '50px', marginTop: '60px', padding: '2vh'}}>
                {
                    this.state.tasks.map(
                        task =>
                            <div id="containerOneT">
                                <div id="envelope1T">
                                    <div id="containerT">
                                        <div id="priorityT"> Priority: High </div>
                                        <div id="taskTypeT"> Task type: {task.taskDescript} </div>
                                        <div id="LocationT"> Location: {task.patient.patientLocation} </div>
                                    </div>

                                    <div id="containerAT">
                                        <div id="containerOneTopT">
                                            <div id="patientNameT"> Patient Name: {task.patient.name} </div>
                                            <div id="MRNnumberT"> MRN Number: {task.patient.numMRN} </div>
                                            <div id="covidStatusT"> Covid Status: Blue </div>
                                        </div>
                                        <div id="containerOneMiddleT">
                                            <div id="SexT"> Sex: {task.patient.sex} </div>
                                            <div id="AgeT"> Age: {
                                                Math.floor(
                                                    (new Date() - new Date(task.patient.dob))
                                                            / 31557600000) // 1000ms*60s*60mins*24hours*365.25days
                                            } </div>
                                            <div id="timeScheduledT"> Time Scheduled: 19:20</div>
                                            <div id="taskCreatedT"> Task Created by: Dr.Lanera</div>
                                        </div>
                                        <div id="containerOneBottomT">

                                            <div id="additionalNotesT">Additional Notes: {task.notes}</div>
                                            <div id="HistoryT">
                                                {" "}
                                                {}{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div id="containerButtons">
                                        <button id="followUpButton" onClick={null}>Add follow-up</button>
                                        <button id="taskDoneButton" >Task Done</button>
                                        <button id="archiveButton"> Remove Task </button>
                                    </div>
                                </div>
                            </div>
                    )
                }
                {/*<TaskOverview/>*/}
                {/*<TaskOverview/>*/}
            </div>
        );
    }
}

export default TasksBox;