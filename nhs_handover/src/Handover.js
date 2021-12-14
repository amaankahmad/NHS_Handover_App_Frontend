import './App.css';
import BottomNavbar from "./BottomNavbar";

function App() {
    return (
        <>
            {/* Modularising the code such that we can just import Bottom Navbar whenever needed as a template */}
            <BottomNavbar />
        </>
    );
}

export default App;
