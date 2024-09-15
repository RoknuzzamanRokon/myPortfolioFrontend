import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Modal,
  Spinner,
} from "react-bootstrap";
import axios from "axios"; 
import "./style.css";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showThanksModal, setShowThanksModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      setLoading(true);
      try {
        // Use environment variable for API URL
        await axios.post(
          `${process.env.REACT_APP_API_URL}/send-email`,
          formData
        );
        setShowThanksModal(true);
      } catch (error) {
        console.error("There was an error sending the email:", error);
        alert("Failed to send message.");
      }
      setLoading(false);
    }
    setValidated(true);
  };

  const handleModalClose = () => {
    setShowThanksModal(false);
    window.location.reload(); // Refresh the page to clear the form
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">
            Message <span className="rotate">to</span> Rokunuzzaman
          </h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formNumber" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your Number with Country code"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a message.
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              type="submit"
              className="mt-4"
              variant="primary"
              block
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  {" Loading..."}
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Modal for showing thanks message */}
      <Modal show={showThanksModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks! I will contact you as soon as possible.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ContactForm;
