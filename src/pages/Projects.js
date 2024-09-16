import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

const projectBackground = [require("../assets/images/project_photo1.jpg")];

const projects = [
  {
    title: "My Portfolio",
    description:
      "Showcasing a portfolio of diverse projects that push the boundaries of engineering and deliver real-world impact with precision and creativity.",
    github: "https://github.com/RoknuzzamanRokon/portfolio",
    techStack: "React, Flask, AWS for Live hosting.",
    image: require("../assets/images/myProjectPhoto.jpg"),
  },
  {
    title: "Trading Bot",
    description:
      "An online auto-trading bot for Coinbase and Binance. Developed backend services and APIs using Python.",
    github: "https://github.com/RoknuzzamanRokon/trading-bot",
    techStack: "AWS (Lambda, DynamoDB, API Gateway, EC2), React",
    image: require("../assets/images/tradingBotPhoto.jpg"),
  },
  {
    title: "Telegram Bot",
    description:
      "A Telegram bot for auto trading that handles trades automatically.",
    github: "https://github.com/RoknuzzamanRokon/telegram-bot",
    techStack: "VPS (Contabo), Telegram Bot Father",
    image: require("../assets/images/telegramTradingBotPhoto.jpg"),
  },
  {
    title: "StoryTeller Bot",
    description: "An online bot that generates stories based on user input.",
    github: "https://github.com/RoknuzzamanRokon/Story_teller_with_django",
    techStack: "Django, MySQL, React",
    image: require("../assets/images/storyGenarator.jpg"),
  },
  {
    title: "E-Shop",
    description:
      "An online e-commerce site offering various products for easy purchase.",
    github: "https://github.com/RoknuzzamanRokon/E-commerce_site",
    techStack: "Django, MySQL, React",
    image: require("../assets/images/ecomarcePhotp.jpg"),
  },
  {
    title: "User Login System",
    description: "It a customer login system using dynamodb",
    github:
      "https://github.com/RoknuzzamanRokon/portfolio_short_project_for_AsthaIT",
    techStack: "HTML, CSS, JavaScript, Dynamodb",
    image: require("../assets/images/userLogin.jpg"),
  },
  {
    title: "Snake Game",
    description: "Its a offline fun for small project.",
    github: "https://github.com/RoknuzzamanRokon/Snake_Game",
    techStack: "Python, tkinter",
    image: require("../assets/images/snakeGamePhoto.jpg"),
  },
];

const Projects = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    AOS.init();
  }, []);

  const navigateToProject = (path) => {
    navigate(path); // use navigate function instead of history.push
  };

  return (
    <Container className="my-5">
      <div
        className="project-heading"
        style={{ backgroundImage: `url(${projectBackground[0]})` }}
      >
        <h1 className="text-center mb-4" style={{ color: "white" }}>
          Projects
        </h1>
      </div>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card
              className="h-100"
              onClick={() => navigateToProject("/project-detail-path")}
              data-aos="fade-up"
            >
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <p>
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                <Button
                  variant="primary"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
