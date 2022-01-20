import React, {Component} from 'react';
import doc2 from "../Asset/doc2.jpg";
import doc from "../Asset/doc.jpg";
import HospitalPersonnelService from "./HospitalPersonnelService";

class CreateHospitalPersonnel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            dob: '',
            sex: '',
            email: '',
            numPager: '',
            password: '',
            role: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changeSexHandler = this.changeSexHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNumPagerHandler = this.changeNumPagerHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);

        this.saveHospitalPerson = this.saveHospitalPerson.bind(this);
    }

    saveHospitalPerson = (e) => {
        e.preventDefault();
        let hospitalPersonnel = {name: this.state.name, dob: this.state.dob, sex: this.state.sex, email: this.state.email, numPager: this.state.numPager};
        console.log('Hospital Personnel =>' + JSON.stringify(hospitalPersonnel))

        HospitalPersonnelService.createHospitalPerson(hospitalPersonnel).then(res => {
            this.props.history.push('persons')
        })
    }

    changeNameHandler=(event) => {
        this.setState({name: event.target.value});
    }
    changeNumPagerHandler=(event) => {
        this.setState({numPager: event.target.value});
    }
    changeEmailHandler=(event) => {
        this.setState({email: event.target.value});
    }
    changePasswordHandler=(event) => {
        this.setState({password: event.target.value});
    }
    changeRoleHandler=(event) => {
        this.setState({role: event.target.value});
    }

    render() {
        return (
            <section>
                <div className="row">
                    <label>
                        <b>Name:</b>
                    </label>
                    <input id="inputSignup" type="text"></input>
                </div>
            </section>

            // <div>
            //     <div className="row">
            //         <label>
            //             <b>Name:</b>
            //         </label>
            //         <input id="inputSignup" type="text"></input>
            //     </div>
            //     <div className="row">
            //         <label>
            //             <b>Pager Number:</b>
            //         </label>
            //         <input id="inputSignup" type="text"></input>
            //     </div>
            //     <div className="row">
            //         <label>
            //             <b>Email:</b>
            //         </label>
            //         <input id="inputSignup" type="email"></input>
            //     </div>
            //     <div className="row">
            //         <label>
            //             <b>Password:</b>
            //         </label>
            //         <input id="inputSignup" type="password"></input>
            //     </div>
            //     <div className="row">
            //         <label>
            //             <b>Confirm Password:</b>
            //         </label>
            //         <input id="inputSignup" type="password"></input>
            //     </div>
            //     <div className="row">
            //         <label htmlFor="role">
            //             <b>Role:</b>
            //         </label>
            //         <select name="role" id="role">
            //             <option value="empty"></option>
            //             <option value="JuniorDoctor">FY</option>
            //             <option value="SHO">SHO</option>
            //             <option value="Consultant">Spr/Cons</option>
            //         </select>
            //     </div>
            // </div>
            // <section id="signupForm">
            //     <div className="form-images1">
            //         <div id="form">
            //             <div id="headerSignUp">
            //                 <h2> Create a new profile: </h2>
            //             </div>
            //             <div id="mainBox">
            //                 <div className="row">
            //                     <label>
            //                         <b>Name:</b>
            //                     </label>
            //                     <input id="inputSignup" name="name"type="text"
            //                            value={this.state.name} onChange={this.changeNameHandler}/>
            //                 </div>
            //                 <div className="row">
            //                     <label>
            //                         <b>Pager Number:</b>
            //                     </label>
            //                     <input id="inputSignup" name="numPager" type="text"  value={this.state.numPager} onChange={this.changeNumPagerHandler}/>
            //                 </div>
            //                 <div className="row">
            //                     <label htmlFor="sex">
            //                         <b>Sex:</b>
            //                     </label>
            //                     <select name="sex" name="role" id="role">
            //                         <option value="empty" onChange={this.changeSexHandler}></option>
            //                         <option value="Male" onChange={this.changeSexHandler}>Male</option>
            //                         <option value="Female" onChange={this.changeSexHandler}>Female</option>
            //                         <option value="Other" onChange={this.changeSexHandler}>Other</option>
            //                     </select>
            //                 </div>
            //                 <div className="row">
            //                     <label>
            //                         <b>Date Of Birth:</b>
            //                     </label>
            //                     <input id="inputSignup" name="dob" type="text"
            //                            value={this.state.dob} onChange={this.changeDOBHandler}/>
            //                 </div>
            //                 <div className="row">
            //                     <label>
            //                         <b>Email:</b>
            //                     </label>
            //                     <input id="inputSignup" name="email" type="email"
            //                            value={this.state.email} onChange={this.changeEmailHandler}/>
            //                 </div>
            //                 <div className="row">
            //                     <label>
            //                         <b>Password:</b>
            //                     </label>
            //                     {/*// TODO: Add logic here to confirm passwords match*/}
            //                     <input id="inputSignup" name="password" type="password"
            //                            value={this.state.password} onChange={this.changePasswordHandler}/>
            //                 </div>
            //                 <div className="row">
            //                     <label>
            //                         <b>Confirm Password:</b>
            //                     </label>
            //                     {/*// TODO: Add logic here to confirm passwords match*/}
            //                     <input id="inputSignup" name="password" type="password"
            //                            value={this.state.password} onChange={this.changePasswordHandler}/>
            //                 </div>
            //                 <div className="row">
            //                     <label htmlFor="role">
            //                         <b>Role:</b>
            //                     </label>
            //                     <select name="role" name="role" id="role">
            //                         <option value="empty" onChange={this.changeRoleHandler}></option>
            //                         <option value="JuniorDoctor" onChange={this.changeRoleHandler}>FY</option>
            //                         <option value="SHO" onChange={this.changeRoleHandler}>SHO</option>
            //                         <option value="Consultant" onChange={this.changeRoleHandler}>Spr/Cons</option>
            //                     </select>
            //                 </div>
            //                 <div id="actionButtons">
            //                     <button id="actionButton" onClick={this.saveHospitalPerson}>Register</button>
            //
            //                     <button id="actionButton" onClick={null}>
            //                         Return to login page
            //                     </button>
            //                 </div>
            //             </div>
            //         </div>
            //
            //         <div className="images">
            //             <img src={doc2} id="docfemale" alt="docfemale" />
            //             <img src={doc} id="docmale" alt="docmale" />
            //         </div>
            //     </div>
            // </section>
        );
    }
}

export default CreateHospitalPersonnel;