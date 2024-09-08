import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        <p>&copy; 2024 Md: Rokunuzzaman. All rights reserved.</p>
        <ul className="social-links list-unstyled">
          {" "}
          {/* Add list-unstyled class */}
          <li className="d-inline mx-3">
            <a href="https://github.com/RoknuzzamanRokon">GitHub</a>
          </li>
          <li className="d-inline mx-3">
            <a href="https://www.linkedin.com/in/rokon-raz/">LinkedIn</a>
          </li>
          <li className="d-inline mx-3">
            <a href="https://www.facebook.com/rokon.raz">FaceBook</a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
