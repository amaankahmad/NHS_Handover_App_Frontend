import './App.css';

// With the buttons, we need to implement the use of the state
// This will be linked with the model to obtain the MyTasks vs AllTasks and switch between pages

export default function BottomNavbar() {
    return (
        <div className="App">
            <>
                <button> My Tasks </button>
                <button> All Tasks </button>
            </>
        </div>
    );
}