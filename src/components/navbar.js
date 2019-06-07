import React, { Component } from 'react';
import { Button,Nav,NavItem,NavLink } from 'reactstrap';

class Navbar extends Component {
    state = {  }    
    render() { 
        return ( 
        <div>
            <Nav>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
            </Nav>        
        </div> );
    }
}
 
export default Navbar;