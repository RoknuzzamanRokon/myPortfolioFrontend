import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          R<span className="animated-letter o1">o</span>k
          <span className="animated-letter o2">o</span>n's P
          <span className="animated-letter o3">o</span>rtf
          <span className="animated-letter o4">o</span>li
          <span className="animated-letter o5">o</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link-custom">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
