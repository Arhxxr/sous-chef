import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import "../styles/Navbar.css";


const GlobalNavbar = () => {
    return (
        <Navbar className="custom-navbar" variant="dark" expand="lg" sticky="top">
            {/* Custom container using Flexbox */}
            <div className="navbar-container">
                {/* Left Dropdown Menu */}
                <Nav className="navbar-left">
                    <NavDropdown 
                        title={<FaBars style={{ fontSize: '36px', color: 'white' }} />} 
                        id="dropdown-toggle"
                    >
                        <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                        <NavDropdown.Item href="/DietProfiles">DietProfiles</NavDropdown.Item>
                        <NavDropdown.Item href="/recipes">Recipes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                {/* Centered Navbar Brand */}
                <Navbar.Brand href="/" className="navbar-center">
                    SOUS CHEF
                </Navbar.Brand>

                {/* Right Profile Icon */}
                <Nav className="navbar-right">
                    <Nav.Link href="/profile">
                        <i className="bi bi-person-circle" style={{ fontSize: '30px', color: 'white' }}></i>
                    </Nav.Link>
                </Nav>
            </div>
        </Navbar>
    );
};

export default GlobalNavbar;
