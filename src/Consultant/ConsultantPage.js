import DateTime from "../NewTask/DateTime";
import "./ConsultantPage.css";
import React from "react";
import taskIcon from "../Asset/taskIcon.png";
import { Routes, Route } from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import ConsultantOverview from "./ConsultantOverview";
import ConsultantBanner from "./ConsultantBanner";
import PageTitle from "../Handover/PageTitle";

function Consultant() {
  let location= useLocation();

  let navigate = useNavigate();
  function returnToLogin() {
    navigate("/");
  }

    if (!location.state) {
        return <div>...</div>
    }

  return (
    <div className="Consultant">
      <Routes>
        <Route
          path="/Consultant"
          element={
            <>
              <ConsultantBanner name={location.state.name} login={returnToLogin}/>
              <PageTitle role="Consultant" />
              <ConsultantOverview/>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default Consultant;
