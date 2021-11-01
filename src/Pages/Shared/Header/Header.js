import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container>
                <Link className="no-border"  to="/home">
                        <img src={logo} alt="" height="80px" width=""/>
                </Link>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                    <Nav.Link className="mx-2 text-light" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="mx-2 text-light" as={HashLink} to="/service">Package</Nav.Link>
                        <Nav.Link className="mx-2 text-light" as={HashLink} to="/about">About</Nav.Link>
                        <Nav.Link className="mx-2 text-light" as={HashLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                    
                    <Nav>
                    {
                            (user.email)?(
                                <NavDropdown title={user.displayName} className="text-light"  id="collasible-nav-dropdown" >
                                    <NavDropdown.Item href="/admin" className="text-center text-success">Admin</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logOut} className="text-center text-light">
                                        <button  className="btn btn-success text-white rounded-pill btn-sm" >Log Out</button>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ):(<Nav.Link className="mx-2 text-light" as={HashLink} to="/login">Login</Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
            
        </div>
    );
};

export default Header;