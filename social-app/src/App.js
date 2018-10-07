import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; 
import SinglePost from './pages/SinglePost';
import NotFound from './pages/404';
import {Navigation as Navbar } from './components/nav/navbar';


class  App extends React.Component{
  
  constructor(){
    super()

  }


  render(){
    return (
      <div className="main-container">
  
      
      <Router>
        
        
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/:postId" component={SinglePost} />
        <Route component={NotFound} />
        </Switch>

      </Router>
  
    </div>
    )
  }
}

  



export default App;