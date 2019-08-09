import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

import { Link } from 'react-router-dom'

export default class Example extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/add">
                                    Add New
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
