import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import {Button} from './Components/Button.style';
import {Container} from './Components/Container.style';
import{Title} from './Components/Title.style';
//import {TextInput} from 'react';
import {Input} from './Components/Input.style';
import {Title2} from './Components/Title2.style'; 
import{Container2} from './Components/Container2.style';
import{Title3} from './Components/Title3.style';
import{Button2} from './Components/Button2.style';


function ForgotPassword(){
   return(
    <Container className="forgotPassword">
           <Container2>
           <br></br>
           <br></br>
           <Title>FORGOT PASSWORD?</Title>
           <br></br>
           <Title2>Plase enter the email adress you'd like your password reset information sent to:</Title2>
           <br></br>
          <Title3>Enter email address:</Title3>
           <Input></Input>
           <Button> Request Reset Link </Button></Container2>
           <Button2>Back to Login Page</Button2>
       </Container>);
};




export default ForgotPassword;