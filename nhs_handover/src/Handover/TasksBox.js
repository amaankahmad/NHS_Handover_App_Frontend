import './HandoverScreen.css';
import TaskOverview from "./TaskOverview";

export default function TasksBox() {

    return (
        <div style={{background: '#D6EFFE', margin: '50px', marginTop: '60px'}}>
            <TaskOverview/>
            <TaskOverview/>
        </div>
    );
}