import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBCollapse, MDBContainer, MDBNavItem, MDBNavLink,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,MDBDropdownItem, MDBHamburgerToggler } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import '../index.css';


class NavbarComponent extends Component {

    state = {
        collapse1: false,
        collapseID: ''
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    toggleSingleCollapse = collapseId => {
        this.setState({
            ...this.state,
            [collapseId]: !this.state[collapseId]
        });
    }

    render() {
        return (
            <header>
                <Router>
                    <MDBNavbar color="white" light expand="md" className="pt-3 pb-3">
                        <MDBContainer>
                            <MDBNavbarBrand>
                                <strong>Real State Project</strong>
                            </MDBNavbarBrand>
                            <MDBHamburgerToggler className="hamburguer-icon" color="#d3531a" id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
                            <MDBCollapse isOpen={this.state.collapse1} navbar>
                                <MDBNavbarNav right className="font-weight-normal text-uppercase text-center">

                                    <MDBNavItem>
                                        <MDBNavLink className="deep-orange-text" to="#!">Home</MDBNavLink>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBNavLink className="deep-orange-text" to="#!">About</MDBNavLink>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                                <span className="mr-2 deep-orange-text">Services</span>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem className="deep-orange-text" href="#!">Service 1</MDBDropdownItem>
                                                <MDBDropdownItem className="deep-orange-text" href="#!">Service 2</MDBDropdownItem>
                                                <MDBDropdownItem className="deep-orange-text" href="#!">Service 3</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret color="deep-orange">
                                                <span className="mr-2 deep-orange-text">Products</span>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem className="deep-orange-text" href="#!">Product 1</MDBDropdownItem>
                                                <MDBDropdownItem className="deep-orange-text" href="#!">Product 2</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBNavLink className="deep-orange-text" to="#!">Contact</MDBNavLink>
                                    </MDBNavItem>

                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </Router>

            </header>
        );
    }
}

export default NavbarComponent;