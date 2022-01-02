import React from "react";
import logo from "../logo.svg";
import NHS from "../Asset/NHS.png";
import signup from "../Asset/signup.png";
import doc from "../Asset/doc.jpg";
import doc2 from "../Asset/doc2.jpg";
import "./Signup.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";

function HeaderSignUp() {
  return (
    <header>
      <div className="header">
        <img src={signup} id="signupLogo" height={60} alt="logo signup" />
        <img src={NHS} id="nhsLogo2" height={80} alt="logo nhs" />
      </div>
    </header>
  );
}
function MainSignUp() {
  let navigate = useNavigate();
  function returnLogIn() {
    navigate("/");
  }

  return (
    <section id="signupForm">
      <div className="form-images1">
        <div id="form">
          <div id="headerSignUp">
            <h2> Create a new profile: </h2>
          </div>
          <div id="mainBox">
            <div className="row">
              <label>
                <b>Name:</b>
              </label>
              <input id="inputSignup" type="text"></input>
            </div>
            <div className="row">
              <label>
                <b>NHS ID:</b>
              </label>
              <input id="inputSignup" type="text"></input>
            </div>
            <div className="row">
              <label>
                <b>Email:</b>
              </label>
              <input id="inputSignup" type="email"></input>
            </div>
            <div className="row">
              <label>
                <b>Password:</b>
              </label>
              <input id="inputSignup" type="password"></input>
            </div>
            <div className="row">
              <label>
                <b>Confirm Password:</b>
              </label>
              <input id="inputSignup" type="password"></input>
            </div>
            <div className="row">
              <label htmlFor="role">
                <b>Role:</b>
              </label>
              <select name="role" id="role">
                <option value="empty"></option>
                <option value="JuniorDoctor">FY</option>
                <option value="SHO">SHO</option>
                <option value="Consultant">Spr/Cons</option>
              </select>
            </div>
            <div id="actionButtons">
              <button id="actionButton">Register</button>

              <button id="actionButton" onClick={returnLogIn}>
                Return to login page
              </button>
            </div>
          </div>
        </div>

        <div className="images">
          <img src={doc2} id="docfemale" alt="docfemale" />
          <img src={doc} id="docmale" alt="docmale" />
        </div>
      </div>
    </section>
  );
}

function FooterSignUp() {
  return <footer></footer>;
}
function Signup() {
  return (
    <div className="content">
      <Routes>
        <Route
          path="/kim"
          element={
            <>
              <HeaderSignUp />
              <MainSignUp />
              <FooterSignUp />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default Signup;
