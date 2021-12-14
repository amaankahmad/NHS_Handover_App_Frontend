import './App.css';
import BottomNavbar from "./BottomNavbar";
import WelcomeBanner from "./WelcomeBanner";

function App() {
    return (
        <>
            {/* Modularising the code such that we can just import Bottom Navbar whenever needed as a template */}
            <WelcomeBanner name="Dr. House"/>
            <h2>Page Title</h2>
            <h1>Tasks Box</h1>
            <BottomNavbar />
        </>
    );
}

export default App;
