import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login/login';
import {BrowserRouter as Router} from "react-router-dom";
import Signup from './SignUp/Signup';
import NewTask from "./NewTask/NewTask";
import Handover from "./Handover/Handover";
import ForgotPassword from "./ForgotPassword/ForgotPass";
import FollowUpTask from "./FollowUpTask/FollowUpTask";



ReactDOM.render(
    <Router>
        <Login/>
        <Signup />
        <NewTask />
        <Handover />
        <ForgotPassword/>
        <FollowUpTask />
    </Router>,
    // React.createElement("h1",null,"Login Page"),
    //<React.StrictMode>
    // <App />
    //</React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
