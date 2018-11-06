import React from 'react';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom"; 
import SinglePost from './pages/SinglePost';
import NotFound from './pages/404';
import Login from './pages/Login';
import Signup from './pages/Signup';

import {loginWithFacebook,signInWithEmailAndPassword,createUser,getFirebaseUser,provider} from './backend/core';

// This private route is going to redirect based on the authenticated
const PrivateRoute = ({component: Component, authed, ...rest}) =>{
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class  App extends React.Component{
  
  constructor(){
    super()

    this.state = {
      authenticated : false
    }
  }


  



signup = (email,password) =>{
    

    console.table([{
        email: email,
        password: password
    }])
    createUser(email,password)
}


  render(){
    
    return (
      <div className="main-container">
  
      
      <Router>
        
        
        <Switch>

        {/* <Route path="/" exact render={(props) => <Home {...props} isAuthed={this.state.authenticated}/>} /> */}
        <Route path="/signup" render={(props)=> <Signup {...props}  signupHandler={this.signup} />}/>
        <Route path="/login" render={(props) => <Login {...props} loginHandler={this.login} authenticat={this.state.authenticated} />} />
        <Route path="/posts/:postId" component={SinglePost} />
        <PrivateRoute authed={this.state.authenticated} path="/home" component={Home} />
        <Route component={NotFound} />
        
        </Switch>

      </Router>
  
    </div>
    )
  }
}

  



export default App;