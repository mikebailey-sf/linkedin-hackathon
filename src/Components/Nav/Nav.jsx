import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <Nav>
          <NavLink href="#">Login w/ LinkedIn</NavLink>
          <NavLink href="#">Logout</NavLink> 
          <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
    );
  }
}