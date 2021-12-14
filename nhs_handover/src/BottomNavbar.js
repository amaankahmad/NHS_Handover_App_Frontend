import './App.css'

// With the buttons, we need to implement the use of the state
// This will be linked with the model to obtain the MyTasks vs AllTasks and switch between pages

export default function BottomNavbar({role}) {
    var secondButton = false;
    var firstButtonText = 'My Tasks';


    if (role === 'SHO') {
        secondButton = true;
    }

    return (
        <div className="bottom App">
            <>
                <button type="button" className="btn btn-primary btn-lg">My Tasks</button>
                <button type="button" className="btn btn-primary btn-lg">All Tasks</button>
            </>
        </div>
    );
}