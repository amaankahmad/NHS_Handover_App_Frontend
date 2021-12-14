import './App.css';
import BottomNavbar from "./BottomNavbar";
import WelcomeBanner from "./WelcomeBanner";
import PageTitle from "./PageTitle";

function App() {
    return (
        <>
            {/* Modularising the code such that we can just import Bottom Navbar whenever needed as a template */}
            <WelcomeBanner name="Dr. House"/>
            <PageTitle role={"Junior Doctor"}/>
            <h1>Tasks Box</h1>
            <BottomNavbar role={"Junior Doctor"}/>
        </>
    );
}

export default App;
