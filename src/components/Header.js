import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const brandStyle = {
    fontFamily: "'Pacifico', cursive", // Use Pacifico font
    fontSize: "2rem", // Slightly larger for emphasis
    fontWeight: "normal", // Pacifico has its own weight
    color: "#FFD700", // Gold color for elegance
    transition: "color 0.3s ease, transform 0.3s ease", // Smooth transitions
    cursor: "pointer", // Indicate interactivity
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={brandStyle}>
          Rokon's Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
