import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css"; 

import { Link } from "react-router-dom"; 

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const backgrounds = [
    require("../assets/images/pic01.jpg"),
    require("../assets/images/pic02.jpg"),
    require("../assets/images/pic03.jpg"),
    require("../assets/images/pic04.jpg"),
    require("../assets/images/pic05.jpg"),
  ];

  // State to keep track of the current background
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground(
        (prevBackground) => (prevBackground + 1) % backgrounds.length
      );
    }, 10000); // 5 seconds
    return () => clearInterval(interval); // Cleanup the interval
  }, [backgrounds.length]);

  return (
    <Container fluid className="home-container">
      {/* Introduction Section with Dynamic Background */}
      <Row
        className="home-intro align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${backgrounds[currentBackground]})`,
        }}
      >
        <Col md={8}>
          <h1 className="display-4 custom-heading">
            Hi, I'm <span className="highlight">Rokunuzzaman</span>
          </h1>

          {/* Typewriter Effect Section */}
          <p className="lead">
            <Typewriter
              options={{
                strings: [
                  "I'm a passionate Computer Engineer specializing in software development, web development and AI solutions.",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 100, // Speed at which the text is deleted
                pauseFor: 2000, // Pause before starting the typing again
              }}
            />
          </p>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row className="home-skills text-center py-5">
        <Col md={4}>
          <h3>Web Development</h3>
          <p>Django, Flask, React, Node.js, HTML/CSS</p>
        </Col>
        <Col md={4}>
          <h3>AI & ML</h3>
          <p>Python, TensorFlow, Data Science</p>
        </Col>
        <Col md={4}>
          <h3>Cloud Computing & DataBase</h3>
          <p>AWS, DigitalOcean, Docker. MySQL, DynamoDB.</p>
        </Col>
      </Row>

      {/* Call to Action for visit my website */}
      <Row className="home-cta text-center py-5">
        <Col>
          <h2>Visit my projects</h2>
          <Link to="/projects" className="btn btn-outline-success">
            Projects
          </Link>
        </Col>
      </Row>

      {/* New Projects Section */}
      <Row className="home-projects text-center py-5">
        <Col>
          <h2>Recent Projects</h2>
        </Col>
      </Row>

      <Row className="text-center">
        <Col md={4} data-aos="fade-down">
          {" "}
          {/* AOS Animation */}
          <Card className="project-card">
            {" "}
            {/* Custom hover effect */}
            <Card.Body>
              <Card.Title>My Portfolio</Card.Title>
              <Card.Text>
                This is my portfolio work. Here i use react and flask. It live
                on AWS.
              </Card.Text>
              <Button
                href="https://github.com/yourusername/project1"
                variant="primary"
              >
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} data-aos="fade-up" data-aos-delay="200">
          {" "}
          {/* AOS with delay */}
          <Card className="project-card">
            {" "}
            {/* Custom hover effect */}
            <Card.Body>
              <Card.Title>Trading Bot</Card.Title>
              <Card.Text>
                An online auto-trading bot for Coinbase and Binance. Developed
                backend services and APIs using Python.
              </Card.Text>
              <Button
                href="https://github.com/yourusername/project2"
                variant="primary"
              >
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} data-aos="fade-down" data-aos-delay="400">
          {" "}
          {/* AOS with delay */}
          <Card className="project-card">
            {" "}
            {/* Custom hover effect */}
            <Card.Body>
              <Card.Title>Telegram Bot</Card.Title>
              <Card.Text>
                A Telegram bot for auto trading that handles trades
                automatically.
              </Card.Text>
              <Button
                href="https://github.com/yourusername/project3"
                variant="primary"
              >
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Testimonials Section */}
      <Row className="home-testimonials text-center py-5 bg-light">
        <Col md={4}>
          <blockquote>
            <p>"Rokunuzzaman's work on our web app was outstanding!"</p>
            <footer>- Joseph -</footer>
          </blockquote>
        </Col>
        <Col md={4}>
          <blockquote>
            <p>"Amazing work, very professional and responsive."</p>
            <footer>- Mason -</footer>
          </blockquote>
        </Col>
        <Col md={4}>
          <blockquote>
            <p>"His AI solutions greatly improved our business operations."</p>
            <footer>- Chef Ayo -</footer>
          </blockquote>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="home-cta text-center py-5">
        <Col>
          <h2>Want to work together?</h2>
          <Link
            to="/contact"
            className="btn btn-outline-success animated-button"
          >
            Contact Me
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
