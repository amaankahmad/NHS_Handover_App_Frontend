import React, {Component} from 'react';
import './Login.css';

class LoginDoctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

    validation(e) {
        // TODO: Check if doctor email in database
        // if (this.state.password!==this.state.confirmPassword) {
        //     this.setState({msg:"Passwords do not match."});
        //     return false;
        // }
        return true;
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
        console.log("Handling submit...")
        console.log(this.state.email);
        console.log(this.state.password);
        if(this.checkEntries()) {
            console.log("All entries checked")
            if(this.validation()) {
                this.props.login();
            }
        }
    }

    render() {
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