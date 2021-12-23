import './HandoverScreen.css';
import TaskOverview from "./TaskOverview";

export default function TasksBox() {

    return (
        <div className="App" style={{background: '#D6EFFE', margin: '50px'}}>
            <TaskOverview/>
            <TaskOverview/>
        </div>
    );
}