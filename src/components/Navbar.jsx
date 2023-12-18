import React from 'react';
// React-router-dom v6
import { NavLink,Link } from "react-router-dom";
// Bootstrap
import { Navbar,Nav,Container } from "react-bootstrap";

function NavbarSUP() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Link to="/" className="navbar-brand">STUDENT List  { "{ CRUD System } "}</Link>
        <Navbar.Toggle/>
        <Navbar.Collapse className="me-auto">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/create-student" className="nav-link">CreateStudent</NavLink>
            <NavLink to="/student-list" className="nav-link">StudentList</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarSUP