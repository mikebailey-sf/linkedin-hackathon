import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import loginURL from '../../services/login';
//https://localhost:3000/?code=AQQRQVAfw5oDR7O7hYzAZxNBDh7Zd2xwTdH4-ZsNObjXn2-Sxm-b55OA2V8VPFmk1T2Fz_H8pj8zJgqXX-z_QTkUhy62eZB17zJX_9vNWvYw6y4De-RW3q82AyWCEjdP03h0N7lkLK7YIRkY04XWB2qumODJyBKrOzqH3y85GGbTpfXr7L0k2Xob4t6TUg&state=GsVVMlM3hX
export default class Example extends React.Component {

  constructor(e) {
    super();
    let loginURL = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78dwkxwigx6ii5&redirect_uri=http://localhost:3000/&state=GsVVMlM3hX&scope=r_liteprofile%20r_emailaddress%20w_member_social';
  }
  render() {
    return (
        <Nav>
          <NavLink href='https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78dwkxwigx6ii5&redirect_uri=http://localhost:3000/&state=GsVVMlM3hX&scope=r_liteprofile%20r_emailaddress%20w_member_social'>Login w/ LinkedIn</NavLink>
          <NavLink href="#">Logout</NavLink> 
          <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
    );
  }
}