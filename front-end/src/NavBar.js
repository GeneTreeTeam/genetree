import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
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


                    <NavbarBrand href="#">
                        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" className="d-inline-block align-top"/>
                         GeneTree
                    </NavbarBrand>

                    <Nav className="bg-light">
                        <NavItem>
                            <NavLink href="/components/">My GeneTree</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Gene Analyze</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components">Payment</NavLink>
                        </NavItem>
                    </Nav>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <form className="form-inline my-2 my-lg-0">

                                    <input className="form-control mr-sm-2"   placeholder="Search..."
                                           aria-label="Search"/>
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                        </button>
                                </form>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/components/">Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Log In</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
