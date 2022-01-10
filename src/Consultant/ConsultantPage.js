import DateTime from "../NewTask/DateTime";
import "./ConsultantPage.css";
import React from "react";
import taskIcon from "../Asset/taskIcon.png";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";

function Consultant() {
  let navigate = useNavigate();
  function returnToLogin() {
    navigate("/");
  }
  return (
    <div className="Consultant">
      <Routes>
        <Route
          path="/Consultant"
          element={
            <>
              <div id="headingConsultant">
                <div id="titleConsultant"> <p> Hello Dr Salem, </p> Here is a summary of all the tasks:  </div>
                <div id="taskIconC">
                  <DateTime />
                  <img
                    src={taskIcon}
                    height={75}
                    alt="taskIcon"
                    id="taskIconImgC"
                  />
                </div>
              </div>

              <>
                <div id="actionButtonsC">
                  <button id="signOutConsultant" onClick={returnToLogin}>
                    {" "}
                    Sign Out
                  </button>
                </div>
              </>

              <div id="containerOneC">
                <div id="envelope1">
                  <div id="containerB">
                    {/*<div id= "containerOneleftB">*/}
                    <div id="priorityC"> Priority: Urgent </div>
                    <div id="taskTypeC"> Task type: Blood Test </div>
                    {/*</div>*/}
                    {/*<div id="containerOneRightB">*/}
                    <div id="LocationC"> Location: Ward #2 </div>
                    <div id="StatusC"> Status: Incomplete Task </div>
                    {/*</div>*/}
                  </div>

                  <div id="containerA">
                    <div id="containerOneTopC">
                      <div id="patientNameC"> Patient Name: John Smith </div>
                      <div id="MRNnumberC"> MRn Number: 74356891 </div>
                      <div id="covidStatusC"> Covid Status: Blue </div>
                    </div>

                    <div id="containerOneMiddleC">
                      <div id="SexC"> Sex: M </div>
                      <div id="timeScheduledC"> Time Scheduled: 19:20</div>
                      <div id="taskCreatedC"> Task Created by: Dr.Lanera</div>
                    </div>
                    <div id="containerOneBottomC">
                      <div id="AgeC"> Age: 29 </div>
                      <div id="timeCompletedC"> Time Completed: 20:15</div>
                      <div id="TaskCompletedC">
                        {" "}
                        Task Completed by: Dr.House{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div id="envelope1">
                  <div id="containerB">
                    {/*<div id= "containerOneleftB">*/}
                    <div id="priorityC"> Priority: Non Urgent </div>
                    <div id="taskTypeC"> Task type: Complete ECG </div>
                    {/*</div>*/}
                    {/*<div id="containerOneRightB">*/}
                    <div id="LocationC"> Location: Ward #3 </div>
                    <div id="StatusC2"> Status: Complete Task </div>
                    {/*</div>*/}
                  </div>

                  <div id="containerA">
                    <div id="containerOneTopC">
                      <div id="patientNameC"> Patient Name: Martin Holloway </div>
                      <div id="MRNnumberC1"> MRn Number: 745597591 </div>
                      <div id="covidStatusC"> Covid Status: Blue </div>
                    </div>

                    <div id="containerOneMiddleC">
                      <div id="SexC"> Sex: M </div>
                      <div id="timeScheduledC1"> Time Scheduled: 18:20</div>
                      <div id="taskCreatedC"> Task Created by: Dr.Lanera</div>
                    </div>
                    <div id="containerOneBottomC">
                      <div id="AgeC"> Age: 29 </div>
                      <div id="timeCompletedC1"> Time Completed: 19:15</div>
                      <div id="TaskCompletedC">
                        {" "}
                        Task Completed by: Dr.Lanera{" "}
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default Consultant;
