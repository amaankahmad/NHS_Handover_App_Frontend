import React, {Component} from 'react';
import './Login.css';
import HospitalPersonnelService from "../SignUp/HospitalPersonnelService";

class LoginDoctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            hospitalPersons: [],
            email: '',
            password: '',
            msg: '',
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeEmailHandler=(event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler=(event) => {
        this.setState({password: event.target.value});
    }

    validateAndNavigate(e) {
        for(let i = 0; i < this.state.hospitalPersons.length; i++) {
            if (this.state.hospitalPersons[i].email === this.state.email) {
                if(this.state.hospitalPersons[i].password === this.state.password) {
                    if(this.state.hospitalPersons[i].role === "Consultant") {
                        this.props.consultantPage(this.state.hospitalPersons[i].name);
                    }
                    else {
                        this.props.login(this.state.hospitalPersons[i].name);
                    }
                    return true;
                }
                else {
                    this.setState({msg: "Incorrect Password"});
                    return false;
                }
            }
        }

        this.setState({msg: "NHS Email not found."});
        return false;
    }

    checkEntries() {
        if (this.state.email==="" || this.state.password==="") {
            this.setState({msg: "Please fill out all entries."});
            return false;
        }
        return true;
    }

    handleSubmit(e) {
        e.preventDefault(); // Prevent clicking submit with empty args
        if(this.checkEntries()) {
            if(this.validateAndNavigate()) {
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
            <div id="mainBoxL">
                <div className="row">
                    <label>
                        <b>NHS Email:</b>
                    </label>
                    <input className = "form-control" type="email" onChange={this.changeEmailHandler} required/>
                </div>

                <div className="row">
                    <label>
                        <b>Password:</b>
                    </label>
                    <input className = "form-control" type="password" onChange={this.changePasswordHandler} required>
                    </input>
                </div>
                <div>
                    <strong>
                        <div className="text-danger">
                            {this.state.msg}
                        </div>
                    </strong>
                </div>
                <div id="actionButtonsLogin">
                    <button id="button1" onClick={this.props.signUp}>
                        Sign up
                    </button>

                    <button id="button2"  onClick={this.props.forgotPassword}>
                        Forgot Password
                    </button>

                    <button id="button3" onClick={this.handleSubmit}>
                        Login
                    </button>
                    </div>
            </div>
        );
    }
}

export default LoginDoctor;