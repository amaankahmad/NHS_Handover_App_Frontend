import React, {Component} from 'react';
import {MemoryRouter, useHistory} from "react-router"
import HospitalPersonnelService from "./HospitalPersonnelService";
import {useNavigate} from "react-router";

class CreateHospitalPerson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hospitalPersons: [],
            loading: '',
            name: '',
            email: '',
            numPager: '',
            password: '',
            confirmPassword: '',
            role: '',
            msg: '',
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNumPagerHandler = this.changeNumPagerHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    saveHospitalPerson = (e) => {
        let hospitalPersonnel = {name: this.state.name, email: this.state.email,
                                    numPager: this.state.numPager, password: this.state.password,};
        console.log('Hospital Personnel =>' + JSON.stringify(hospitalPersonnel))

        if (this.state.role === "Consultant") {
            console.log("Creating Consultant...")
            HospitalPersonnelService.createConsultant(hospitalPersonnel).then(res => {});
        }
        else {
            console.log("Creating Junior Doctor...")
            HospitalPersonnelService.createJuniorDoctor(hospitalPersonnel).then(res => {});
        }
    }

    changeNameHandler=(event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler=(event) => {
        this.setState({email: event.target.value});
    }
    changeNumPagerHandler=(event) => {
        this.setState({numPager: event.target.value});
    }
    changePasswordHandler=(event) => {
        this.setState({password: event.target.value});
    }
    changeConfirmPasswordHandler=(event) => {
        this.setState({confirmPassword: event.target.value});
    }
    changeRoleHandler=(event) => {
        this.setState({role: event.target.value});
    }

    validation(e) {
        if (this.state.password!==this.state.confirmPassword) {
            this.setState({msg:"Passwords do not match."});
            return false;
        }
        for(let i = 0; i < this.state.hospitalPersons.length; i++) {
            if (this.state.hospitalPersons[i].email === this.state.email) {
                this.setState({msg: "Account already exists."});
                return false;
            }
        }

        return true;
    }

    checkEntries(e) {
        if (this.state.name==="" || this.state.numPager==="" || this.state.email==="" || this.state.password === ""
                || this.state.confirmPassword==="" || this.state.role === "empty") {
            this.setState({msg: "Please fill out all entries."});
            return false;
        }
        return true;
    }

    handleSubmit(e) {
        e.preventDefault(); // Prevent clicking submit with empty args
        if(this.checkEntries()) {
            if(this.validation()) {
                this.saveHospitalPerson();
                if (this.state.role === "Consultant") {
                    this.props.navConsultant(this.state.name);
                }
                else {
                    this.props.navJuniorDr(this.state.name);
                }
            }
        }
    }

    componentDidMount(){
        HospitalPersonnelService.getHospitalPersons().then((res) => {
            this.setState({hospitalPersons: res.data})
        });
        this.setState({loading: false})
    }

    render() {
        if (this.state.loading) {
            return <div className="text-center">...</div>
        }
        return (
            <div className="container">
                {/*<form>*/}
                    <div className="row">
                        <label>
                            <b>Name:</b>
                        </label>
                        <input className = "form-control" type="inputSignup" name="name"type="text" required
                               value={this.state.name} onChange={this.changeNameHandler}/>
                    </div>
                    <div className="row">
                        <label>
                            <b>Pager Number:</b>
                        </label>
                        <input className = "form-control" type="inputSignup" name="numPager" type="text" required
                               value={this.state.numPager} onChange={this.changeNumPagerHandler}/>
                    </div>
                    <div className="row">
                        <label>
                            <b>Email:</b>
                        </label>
                        <input className = "form-control" type="inputSignup" name="email" type="email" required
                               value={this.state.email} onChange={this.changeEmailHandler}/>
                    </div>
                    <div className="row">
                        <label>
                            <b>Password:</b>
                        </label>
                        <input className = "form-control" type="inputSignup" name="password" type="password" required
                               value={this.state.password} onChange={this.changePasswordHandler}/>
                    </div>
                    <div className="row">
                        <label>
                            <b>Confirm Password:</b>
                        </label>
                        <input className = "form-control" type="inputSignup" name="confirmPassword" type="password"
                               required value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler}/>
                    </div>
                    <div className="row">
                        <label htmlFor="role">
                            <b>Role:</b>
                        </label>
                        <select name="role" type="role" id="role" required onChange={this.changeRoleHandler}>
                            <option value="empty"></option>
                            <option value="Junior Doctor">FY</option>
                            <option value="Junior Doctor">SHO</option>
                            <option value="Consultant">Spr/Cons</option>
                        </select>
                        <div>
                            <strong>
                                <div className="text-danger" id = "passwordCheck">
                                    {this.state.msg}
                                </div>
                            </strong>
                        </div>
                        <div id="actionButtonsSignUp">
                            <button id="actionButtonSignUp1" onClick={this.props.home}>
                                Return to login page
                            </button>
                            <button id="actionButtonSignUp2" onClick={this.handleSubmit}>Register</button>
                        </div>
                    </div>
                {/*</form>*/}
            </div>
        );
    }
}

export default CreateHospitalPerson;
