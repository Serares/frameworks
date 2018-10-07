import React from 'react';
import Navbar from '../../../node_modules/react-bootstrap/lib/Navbar';
import NavDropdown from '../../../node_modules/react-bootstrap/lib/NavDropdown';
import MenuItem from '../../../node_modules/react-bootstrap/lib/MenuItem';
import NavItem from '../../../node_modules/react-bootstrap/lib/NavItem';
import Nav from '../../../node_modules/react-bootstrap/lib/Nav';
import Basket from './Basket';

/**
 * App navigation
 * Folosesc react-bootstrap 
 * @param  {Object}   props
 * @param  {Object}   props.user         user object
 * @param  {Function} props.handleLogout logout action
 */
export const Navigation = (props) => {
    return(
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Store</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Sign In
            </NavItem>
            <NavItem eventKey={2} href="#">
                
              Basket
              
            </NavItem>
            <Basket />

          </Nav>
        </Navbar.Collapse>
      </Navbar>
);
}
