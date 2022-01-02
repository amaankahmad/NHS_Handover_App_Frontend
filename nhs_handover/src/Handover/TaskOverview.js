import './HandoverScreen.css';
import { useNavigate } from 'react-router';

export default function TaskOverview() {

    let navigate = useNavigate();
   function handleClickFollowUp() {
       navigate('/FollowUpTask')
    }
    return (
        <>  <div className="envelop" style={{border:"2px solid grey" , borderBottom:"none"}}>
            <div className="row" style={{margin: "10px"}}>
                <div className="col" style={{marginTop: "25px"}}>
                    Priority
                </div>
                <div className="col" style={{marginTop: "25px"}}>
                    Title
                </div>
                <div className="col" style={{marginTop: "25px"}}>
                    Location
                </div>
            </div>

            <div className="row" style={{background: "#C4C4C4", borderBottom:"2px solid grey",  marginLeft: "0px"}}>
                <>
                <h5 style={{textAlign: "left", margin:"10px", fontWeight: "bold"}}>Description</h5>
                <div className="row">
                    <p className="col-md-1" style={{textAlign: "center"}}> </p>
                    <p className="col-md-2" style={{textAlign: "center"}}>Name: John Smith</p>
                    <p className="col-md-2" style={{textAlign: "center"}}>MRN: 0782345643</p>
                    <p className="col-md-2" style={{textAlign: "center"}}>NHS ID: 74329432</p>
                    <p className="col-md-2" style={{textAlign: "center"}}>Age: 34 </p>
                    <p className="col-md-2" style={{textAlign: "center"}}>Covid status: Negative</p>
                    <p className="col-md-1" style={{textAlign: "center"}}> </p>
                </div>
                <div className="row">
                    <p className="col-md-1" style={{textAlign: "center"}}> </p>
                    <p className="col-md-2" style={{textAlign: "center"}}>Sex: Male</p>
                    <p className="col-md-2" style={{textAlign: "center"}}>Time admitted: 15:20</p>
                    <p className="col-md-3" style={{textAlign: "center"}}>Department of admission: AMU</p>
                    <p className="col-md-3" style={{textAlign: "center"}}>Task created by: Dr. Johnson</p>
                    <p className="col-md-1" style={{textAlign: "center"}}> </p>
                </div>
                <div className="row">
                    <p className="col-md-1" style={{textAlign: "left"}}> </p>
                    <p className="col-md-3" style={{textAlign: "left"}}>History of tasks: </p>
                    <p className="col-md-3" style={{textAlign: "left"}}>Additional notes: </p>
                    <p className="col-md-1" style={{textAlign: "center"}}> </p>
                    <div className="row">
                        <p className="col-md-1" style={{textAlign: "left", marginLeft: "20px"}}> </p>
                        <p className="col-md-3" style={{textAlign: "left"}}> - Bloods Taken </p>
                        <p className="col-md-3" style={{textAlign: "left"}}> - Diabetic (Type 2) </p>
                        <p className="col-md-1" style={{textAlign: "center"}}> </p>
                        <button className="col-md-1" onClick={handleClickFollowUp} style={{textAlign: "center", background: "lightgrey"}}>Add follow-up</button>
                        <p className="col-md-1" style={{textAlign: "center"}}> </p>
                        <button className="col-md-1" style={{textAlign: "center", background: "lightgreen"}}>Task Done</button>
                        <p className="col-md-1" style={{textAlign: "center"}}> </p>
                    </div>
                </div>
                </>
            </div>
            </div>
        </>
    );
}