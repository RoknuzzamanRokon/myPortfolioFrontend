import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import projects from "../data/projectsData";
import "./ProjectDetail.css"; // Create and style as needed

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id, 10);
  const project = projects.find((proj) => proj.id === projectId);

  if (!project) {
    return (
      <Container className="my-5 text-center">
        <h1>Project Not Found</h1>
        <Button
          variant="primary"
          onClick={() => navigate(-1)}
          className="button-class mb-4"
        >
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
        className="button-class mb-4"
      >
        &larr; Back to Projects
      </Button>

      <Row>
        <Col md={6}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <p>
            <strong>Tech Stack:</strong> {project.techStack}
          </p>
          <Button
            className="button-class"
            variant="primary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Carousel>
            {project.gallery.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`Slide ${idx + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
