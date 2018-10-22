import React from 'react';
import Navbar from '../../../node_modules/react-bootstrap/lib/Navbar';
import {Link} from 'react-router-dom';



const colorText = {
    color: "#ffffff"
}

export const Navigation = (props) => {
    return(
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home" style={colorText}>Social</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text style={colorText}>
        {
          props.authenticated ? 
          <Navbar.Text><span>Hello:</span> <Navbar.Link href="#" style={colorText}>Default Name</Navbar.Link></Navbar.Text>
          :
          <span>Not signed in</span>
        }
          
        </Navbar.Text>

        {props.authenticated ? 
        <Navbar.Text pullRight style={colorText}><Link to="/login"><button>Log out</button></Link></Navbar.Text>
        :
        <Navbar.Text pullRight style={{color:"#000"}}><Link to="/login"><button>Sign up or Log In</button></Link></Navbar.Text>
        }
        
      </Navbar.Collapse>
    </Navbar>
);
}
