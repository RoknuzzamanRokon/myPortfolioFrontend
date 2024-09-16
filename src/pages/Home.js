import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import "aos/dist/aos.css";
import "./Home.css"; 

import { Link } from "react-router-dom"; 


const Home = () => {
  // Declare the background images array outside of the useEffect
  const backgrounds = [
    require("../assets/images/pic01.jpg"),
    require("../assets/images/pic02.jpg"),
    require("../assets/images/pic03.jpg"),
    require("../assets/images/pic04.jpg"),
    require("../assets/images/pic05.jpg"),
    require("../assets/images/pic06.jpg"),
    require("../assets/images/pic07.jpg"),
    require("../assets/images/pic08.jpg"),
    require("../assets/images/pic09.jpg"),
    require("../assets/images/pic10.jpg"),
    require("../assets/images/pic11.jpg"),
  ];

  // State for the current background index and the opacity
  const [currentBackground, setCurrentBackground] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Begin the fade-out process
      setOpacity(0);
      setTimeout(() => {
        // Change the background image index and fade back in
        setCurrentBackground(prevBackground => (prevBackground + 1) % backgrounds.length);
        setOpacity(1);
      }, 1000); // This should be half the interval time for a smooth transition
    }, 10000); // 10 seconds for each background image change

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs only once after the initial render


  return (
    <Container fluid className="home-container">
      <Row className="home-intro align-items-center justify-content-center text-center">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${backgrounds[currentBackground]})`,
            opacity: opacity,
            transition: "opacity 1s ease-in-out",
          }}
        />
        <Col md={8} className="text-content">
          <h1 className="display-4 custom-heading">
            Hi, I'm <span className="highlight">Rokunuzzaman</span>
          </h1>
          <p className="lead">
            <Typewriter
              options={{
                strings: [
                  "I'm a passionate Computer Engineer specializing in software development, web development and AI solutions.",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
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
                An online auto-trading bot for Coinbase and Binance. Backend for
                using Python.
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
            <p>"Amazing work, very professional and responsive.Thank you."</p>
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
