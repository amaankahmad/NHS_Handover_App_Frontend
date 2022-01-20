import React, {Component} from 'react';
import './ForgotPassword.css'

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            msg: ''
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    changeEmailHandler=(event) => {
        this.setState({email: event.target.value});
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
        if (this.state.email==="") {
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
                this.props.home();
            }
        }
    }

    render() {
        return (
            <div id="mainBoxL">

                <div className="row">
                    <label>
                        <b>Enter email address:</b>
                    </label>
                    <input className="form-control" type="email" onChange={this.changeEmailHandler}></input>
                </div>
                <div>
                    <strong>
                        <div className="text-danger" id="entryCheck">
                            {this.state.msg}
                        </div>
                    </strong>
                </div>
                <div id="actionButtonsSignUp">
                    <button id="button1" onClick = {this.props.home}>
                        Return To Login page
                    </button>

                    <button id="button2"  onClick={this.handleSubmit}>
                        Request Reset Link
                    </button>

                </div>

            </div>
        );
    }
}

export default ForgotPassword;