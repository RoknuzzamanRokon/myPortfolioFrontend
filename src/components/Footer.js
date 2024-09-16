import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        <p className="footer-text">
          &copy; 2024 Md: Rokunuzzaman. All rights reserved.
        </p>
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
          <li className="d-inline mx-3">
            <a href="https://stackoverflow.com/users/18601804/rokon">
              StackOverFlow
            </a>
          </li>
          <li className="d-inline mx-3">
            <a href="https://www.upwork.com/freelancers/~019cb4e45cc376d5f8?mp_source=share">
              UpWork
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
