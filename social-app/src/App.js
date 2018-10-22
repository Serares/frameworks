import React from 'react';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"; 
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


  login = (email,password) => {
        
    console.table([{
        email: email,
        password: password
    }])

    // see errors if not signed in or if there are wrong inputs values
    signInWithEmailAndPassword(email,password)
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

    provider.onAuthStateChanged(user => {if(user){console.log(user);}else {console.log("no signed in")} })
    // adauga redirect catre home ;
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
        <Route path="/login" render={(props) => <Login {...props} loginHandler={this.login} />} />
        <Route path="/posts/:postId" component={SinglePost} />
        <PrivateRoute authed={this.state.authenticated} path="/" component={Home} />
        <Route component={NotFound} />
        
        </Switch>

      </Router>
  
    </div>
    )
  }
}

  



export default App;