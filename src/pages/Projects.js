import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import projects from "../data/projectsData"; // Adjust the path as necessary

const projectBackground = [require("../assets/images/project_photo1.jpg")];

const Projects = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null); // Tracks the id of the expanded project

  useEffect(() => {
    AOS.init();
  }, []);

  const navigateToProject = (path) => {
    navigate(path);
  };

  const toggleDescription = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const renderDescription = (description, id) => {
    const words = description.split(" ");
    if (expanded === id) {
      return (
        <>
          <Card.Text>{description}</Card.Text>
          <Button
            variant="link"
            onClick={(e) => {
              e.stopPropagation();
              toggleDescription(id);
            }}
          >
            Show Less
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Card.Text>{words.slice(0, 10).join(" ")}...</Card.Text>
          <Button
            variant="link"
            onClick={(e) => {
              e.stopPropagation();
              toggleDescription(id);
            }}
          >
            Show More
          </Button>
        </>
      );
    }
  };

  return (
    <Container className="my-5">
      <div
        className="project-heading"
        style={{
          backgroundImage: `url(${projectBackground[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          marginBottom: "30px",
        }}
      >
        <h1 className="text-center mb-4">Projects</h1>
      </div>
      <Row>
        {projects.map((project) => (
          <Col md={6} lg={4} key={project.id} className="mb-4">
            <Card
              className="project-card"
              data-aos="fade-up"
              onClick={() => navigateToProject(`/projects/${project.id}`)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                {renderDescription(project.description, project.id)}
                <p>
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                <Button
                  variant="primary"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevent card click when clicking the button
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
