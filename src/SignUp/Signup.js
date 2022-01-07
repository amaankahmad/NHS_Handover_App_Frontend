import React from "react";
import logo from "../logo.svg";
import NHS from "../Asset/NHS.png";
import signup from "../Asset/signup.png";
import doc from "../Asset/doc.jpg";
import doc2 from "../Asset/doc2.jpg";
import "./Signup.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import CreateHospitalPersonnel from "./CreateHospitalPersonnel";

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
      <CreateHospitalPersonnel />
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
