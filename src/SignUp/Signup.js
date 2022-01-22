import React from "react";
import NHS from "../Asset/NHS.png";
import signup from "../Asset/signup.png";
import doc from "../Asset/doc.jpg";
import doc2 from "../Asset/doc2.jpg";
import "./Signup.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import CreateHospitalPerson from "./CreateHospitalPerson";


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
  function navigateToShift(docName) {
    navigate("/shift", {state: {name: docName}});
  }
  function navigateToConsultant(docName) {
    navigate("/Consultant", {state: {name: docName}});
  }

  return (
    <section id="signupForm">
      <div className="form-images1">
        <div id="form">
          <div id="headerSignUp">
            <h2> Create a new profile: </h2>
          </div>
          <div id="mainBox">
            <CreateHospitalPerson home={returnLogIn} navJuniorDr={navigateToShift} navConsultant={navigateToConsultant}/>
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
          path="/SignUp"
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
