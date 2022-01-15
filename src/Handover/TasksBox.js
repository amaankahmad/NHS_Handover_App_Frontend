import './HandoverScreen.css';
import TaskOverview from "./TaskOverview";

export default function TasksBox() {

    return (
        <div style={{background:  '#abdefb', margin: '50px', marginTop: '60px', padding: '2vh'}}>
            <TaskOverview/>
            <TaskOverview/>
        </div>
    );
}