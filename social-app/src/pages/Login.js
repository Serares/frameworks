import React from 'react';

import Form from '../../node_modules/react-bootstrap/lib/Form';
import FormGroup from '../../node_modules/react-bootstrap/lib/FormGroup';
import Button from '../../node_modules/react-bootstrap/lib/Button';
import FormControl from '../../node_modules/react-bootstrap/lib/FormControl';
import ControlLabel from '../../node_modules/react-bootstrap/lib/ControlLabel';
import imgPngFacebook from '../static/img/facebookpng.png';


import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";


  const styleForForm = {
    width:"200px",
    margin:"auto"
}

const formContainer = {
    width:"20%",
    margin:"auto"
}


 class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state={

            authenticated: false,
            email: "",
            password: "",
        }

        
    }

    //  log in handler
    login = () =>{

        const emailS = this.state.email;
        const passwordS = this.state.password;

        this.props.loginHandler(emailS,passwordS)

    }
    // sign up handler 
    signup = () =>{
        const emailS = this.state.email;
        const passwordS = this.state.password;

        this.props.signupHandler(emailS,passwordS)
    }

    // inputs values 
    handleEmailChange = (e) =>{
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    
    render() {
        return (
            <div className="login">
                <div className="welcome-container">
                    
                </div>
                <Form horizontal onSubmit={(e)=>{e.preventDefault()}} style={styleForForm}>
                <div className="form-container">
                <div className="inputs-container">
                <h3>Welcome!</h3>
                <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange}/>
                <ControlLabel>Password</ControlLabel>{' '}
                        <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                    
                </div>
                <div className="buttons-container">
                
                    <Button bsSize="large" onClick={this.login} style={{marginRight:"20px"}}>
                        <i className='log-in-txt' /> log in
                    </Button>
                    
                    <Button  onClick={this.loginFacebook}><img src={imgPngFacebook} style={{width:"20px", height:"20px"}}/>Sign in with Facebook</Button>
                    
                    <FormGroup>
            
            <FormControl.Static>Don't have an account?<Link to="/signup">Register</Link> </FormControl.Static>
                    </FormGroup>

                </div>
                </div>
                </Form>
            </div>
        );
    }
}

export default Login;


