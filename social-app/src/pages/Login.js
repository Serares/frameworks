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

            redirect: false,
            email: "",
            password: "",

        }

        
    }

    componentWillReceiveProps(){
        console.log(this.props.authenticat);
        this.setState({
            redirect: this.props.authenticat
        })
    }

    //  log in handler
    

    login = (email,password) => {
        const emailS = this.state.email;
        const passwordS = this.state.password;

        console.table([{
            email: email,
            password: password
        }])
    
        // see errors if not signed in or if there are wrong inputs values
        signInWithEmailAndPassword(emailS,passwordS)
        .then(()=>{
          
          this.setState({redirect:true})
          
        })
        .catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
            if(errorCode === 'auth/wrong-password'){
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
        })
    
        // provider.onAuthStateChanged(user => {
        //   if(user){
        //   console.log(user); 
        //   this.setState({authenticated:true})
    
          
        // }else {console.log("not signed in")} })
        // // adauga redirect catre home ;
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
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirect } = this.state;

        if(redirect){

            return (
                <Redirect to="/home" />
            )
        }

        return (
            <div className="login">
                <div className="welcome-container">
                    
                </div>
                <Form horizontal onSubmit={(e)=>{e.preventDefault()}} style={styleForForm}>
                <div className="form-container">
                <div className="inputs-container">
                <h3>Welcome!</h3>
                <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email}/>
                <ControlLabel>Password</ControlLabel>{' '}
                        <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
                    
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


