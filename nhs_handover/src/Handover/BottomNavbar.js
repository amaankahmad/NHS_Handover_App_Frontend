import './HandoverScreen.css';

// With the buttons, we need to implement the use of the state
// This will be linked with the model to obtain the MyTasks vs AllTasks and switch between pages

export default function BottomNavbar({role}) {
    var secondButton = false;
    var firstButtonText = 'My Tasks';


    if (role === 'SHO') {
        secondButton = true;
    }

    return (
        <div className="bottom center" style={{position: "relative" , bottom: "0%"}}>
            <>
                <button type="myTask" className="btn btn-primary btn-lg" style={{marginRight:"10px", color: "white", borderColor: "DodgerBlue" ,backgroundColor: "DodgerBlue", borderRadius: "10px", padding: "10px"}}>My Tasks</button>
                <button type="allTask" className="btn btn-primary btn-lg" style={{marginLeft:"10px", color: "white", borderColor: "DodgerBlue" ,backgroundColor: "DodgerBlue", borderRadius: "10px", padding: "10px"}}>All Tasks</button>
            </>
        </div>
    );
}