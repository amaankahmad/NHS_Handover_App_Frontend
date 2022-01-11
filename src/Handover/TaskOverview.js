import './HandoverScreen.css';
import { useNavigate } from 'react-router';
import React from "react";

export default function TaskOverview() {

    let navigate = useNavigate();
   function handleClickFollowUp() {
       navigate('/FollowUpTask')
    }
    return (


    <div id="containerOneT">
            <div id="envelope1T">
                <div id="containerT">
                    <div id="priorityT"> Priority: Urgent </div>
                    <div id="taskTypeT"> Task type: Blood Test </div>
                    <div id="LocationT"> Location: Ward #2 </div>
                </div>

                <div id="containerAT">
                    <div id="containerOneTopT">
                        <div id="patientNameT"> Patient Name: John Smith </div>
                        <div id="MRNnumberT"> MRN Number: 74356891 </div>
                        <div id="covidStatusT"> Covid Status: Blue </div>
                    </div>
                    <div id="containerOneMiddleT">
                        <div id="SexT"> Sex: M </div>
                        <div id="AgeT"> Age: 29 </div>
                        <div id="timeScheduledT"> Time Scheduled: 19:20</div>
                        <div id="taskCreatedT"> Task Created by: Dr.Lanera</div>
                    </div>
                    <div id="containerOneBottomT">

                        <div id="additionalNotesT">Additional Notes: Diabetic Type 2</div>
                        <div id="HistoryT">
                            {" "}
                            History of tasks: bloods taken{" "}
                        </div>
                    </div>
                </div>
                <div id="containerButtons">
                    <button id="followUpButton" onClick={handleClickFollowUp}>Add follow-up</button>
                    <button id="taskDoneButton" >Task Done</button>
                </div>
            </div>
        </div>


//          <div className="envelop" style={{border:"2px solid grey" , borderBottom:"none"}}>
//
//          {/*//     <div className="row" style={{margin: "10px"}}>*/}
//          {/*//         <div className="col" style={{marginTop: "25px"}}>*/}
//          {/*//             Priority*/}
//          {/*//         </div>*/}
//          {/*//         <div className="col" style={{marginTop: "25px"}}>*/}
//          {/*//             Title*/}
//          {/*//         </div>*/}
//          {/*//         <div className="col" style={{marginTop: "25px"}}>*/}
//          {/*//             Location*/}
//          {/*//         </div>*/}
//          {/*//     </div>*/}
//
//
//
//             {/*<div className="row" style={{background: "#C4C4C4", borderBottom:"2px solid grey",  marginLeft: "0px"}}>*/}
//             {/*    <>*/}
//             {/*    <h5 style={{textAlign: "left", margin:"10px", fontWeight: "bold"}}>Description</h5>*/}
//             {/*    <div className="row">*/}
//             {/*        <p className="col-md-1" style={{textAlign: "center"}}> </p>*/}
//             {/*        <p className="col-md-2" style={{textAlign: "center"}}>Name: John Smith</p>*/}
//             {/*        <p className="col-md-2" style={{textAlign: "center"}}>MRN: 0782345643</p>*/}
//             {/*        /!*<p className="col-md-2" style={{textAlign: "center"}}>NHS ID: 74329432</p>*!/*/}
//             {/*        <p className="col-md-2" style={{textAlign: "center"}}>Age: 34 </p>*/}
//             {/*        <p className="col-md-2" style={{textAlign: "center"}}>Covid status: Negative</p>*/}
//             {/*        <p className="col-md-1" style={{textAlign: "center"}}> </p>*/}
//             {/*    </div>*/}
//             {/*    <div className="row">*/}
//             {/*        <p className="col-md-1" style={{textAlign: "center"}}> </p>*/}
//             {/*        <p className="col-md-2" style={{textAlign: "center"}}>Sex: Male</p>*/}
//             {/*        <p className="col-md-2" style={{textAlign: "center"}}>Time admitted: 15:20</p>*/}
//             {/*        <p className="col-md-3" style={{textAlign: "center"}}>Department of admission: AMU</p>*/}
//             {/*        <p className="col-md-3" style={{textAlign: "center"}}>Task created by: Dr. Johnson [PagerNum: 1263] </p>*/}
//             {/*        <p className="col-md-1" style={{textAlign: "center"}}> </p>*/}
//             {/*    </div>*/}
//             {/*    <div className="row">*/}
//             {/*        <p className="col-md-1" style={{textAlign: "left"}}> </p>*/}
//             {/*        <p className="col-md-3" style={{textAlign: "left"}}>History of tasks: </p>*/}
//             {/*        <p className="col-md-3" style={{textAlign: "left"}}>Additional notes: </p>*/}
//             {/*        <p className="col-md-1" style={{textAlign: "center"}}> </p>*/}
//             {/*        <div className="row">*/}
//             {/*            <p className="col-md-1" style={{textAlign: "left", marginLeft: "20px"}}> </p>*/}
//             {/*            <p className="col-md-3" style={{textAlign: "left"}}> - Bloods Taken </p>*/}
//             {/*            <p className="col-md-3" style={{textAlign: "left"}}> - Diabetic (Type 2) </p>*/}
//             {/*            <p className="col-md-1" style={{textAlign: "center"}}> </p>*/}
//             {/*            <button id="followUpButton" className="col-md-1" onClick={handleClickFollowUp}>Add follow-up</button>*/}
//             {/*            <p className="col-md-1" style={{textAlign: "center"}}> </p>*/}
//             {/*            <button id="taskDoneButton" className="col-md-1">Task Done</button>*/}
//             {/*            <p className="col-md-1" style={{textAlign: "center"}}> </p>*/}
//             {/*        </div>*/}
//             {/*    </div>*/}
//             {/*    </>*/}
//             {/*</div>*/}
//
//             {/*</div>*/}
//
    );
}