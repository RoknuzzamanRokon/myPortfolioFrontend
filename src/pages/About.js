import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css"; // Optional for custom styling
import pic01 from "../assets/images/rokon.jpg";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Profile Image */}
        <Col md={4} className="text-center mb-4">
          <Image src={pic01} roundedCircle className="profile-img" />
        </Col>

        {/* About Content */}
        <Col md={8}>
          <h1 className="about-heading">About Me</h1>
          <p className="lead">
            Hi, I'm <strong>Rokunuzzaman</strong>, a passionate Computer
            Engineer specializing in software development, web technologies, and
            AI/ML solutions.
          </p>
          <p>
            With over 6+ years of experience, I have had the privilege of
            working on numerous exciting projects that range from web
            applications to data-driven solutions. I take pride in building
            efficient, scalable, and robust solutions while always being open to
            learning and adapting to new technologies.
          </p>
          <p>My expertise includes:</p>
          <ul>
            <li>Crypto Currency Developer (web3, API integration)</li>
            <li>Full-Stack Web Development (Django, Flask, React, Node.js)</li>
            <li>Machine Learning & Data Science (Python, TensorFlow)</li>
            <li>Cloud Computing (AWS, Digital Ocean)</li>
          </ul>
          <p>
            I am constantly looking for opportunities to grow, collaborate with
            other professionals, and make a meaningful impact through
            technology.
          </p>
        </Col>
      </Row>

      {/* Second Section (Optional) */}
      <Row className="my-5">
        <Col md={6}>
          <h3>My Philosophy</h3>
          <p>
            I believe in creating technology that not only solves problems but
            also improves the quality of life. By focusing on user experience,
            efficiency, and scalability, I aim to build solutions that provide
            long-term value.
          </p>
        </Col>
        <Col md={6}>
          <h3>Why Choose Me?</h3>
          <p>
            Whether you're looking for a simple website or a complex enterprise
            solution, I bring a deep understanding of various technologies and
            the ability to adapt quickly to the needs of the project. Let’s work
            together to bring your vision to life!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;



