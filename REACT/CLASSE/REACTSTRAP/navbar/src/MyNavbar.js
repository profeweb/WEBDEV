import React, { Component } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,
  		UncontrolledDropdown,DropdownToggle,DropdownMenu,
  		DropdownItem } from 'reactstrap';

class MyNavbar extends Component {

	constructor(props) {
	    super(props);

	    this.toggle = this.toggle.bind(this);
	    this.state = {
	      isOpen: false
	    };
	  }
	  
	  toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  }

	  render() {
	    return (
	      <div>
	      	<Navbar color="light" light expand="md">
	            <NavbarBrand href="/">My Navbar</NavbarBrand>
	            <NavbarToggler onClick={this.toggle} />
	                <Collapse isOpen={this.state.isOpen} navbar>
	                  <Nav className="ml-auto" navbar>
	                    <NavItem>
	                      <NavLink href="/components/">Secció A</NavLink>
	                    </NavItem>
	                    <NavItem>
	                      <NavLink href="">Secció B</NavLink>
	                    </NavItem>
	                    <UncontrolledDropdown nav inNavbar>
	                      <DropdownToggle nav caret>
	                        Secció C
	                      </DropdownToggle>
	                      <DropdownMenu right>
	                        <DropdownItem>
	                          Opció 1
	                        </DropdownItem>
	                        <DropdownItem>
	                          Opció 2
	                        </DropdownItem>
	                        <DropdownItem divider />
	                        <DropdownItem>
	                          Opció 3
	                        </DropdownItem>
	                      </DropdownMenu>
	                    </UncontrolledDropdown>
	                  </Nav>
	                </Collapse>
	              </Navbar>
	            </div>
	    );
	  }
}

export default MyNavbar;