import './HandoverScreen.css';
import TaskOverview from "./TaskOverview";

export default function TasksBox() {

    return (
        <div style={{background: '#D6EFFE', margin: '50px', marginTop: '180px'}}>
            <TaskOverview/>
            <TaskOverview/>
        </div>
    );
}