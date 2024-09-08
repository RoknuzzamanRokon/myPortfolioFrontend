import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import axios from "axios"; // Axios to send HTTP requests

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [showThanksModal, setShowThanksModal] = useState(false); // State to handle modal visibility

  // Function to update state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      try {
        await axios.post("http://localhost:5000/send-email", formData);
        setShowThanksModal(true); // Show the thanks modal on successful submission
      } catch (error) {
        console.error("There was an error sending the email:", error);
        alert("Failed to send message.");
      }
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
          <h2 className="text-center mb-4">Message to Rokunuzzaman</h2>
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
                placeholder="Enter your Number"
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

            <Button type="submit" className="mt-4" variant="primary" block>
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Modal for showing thanks message */}
      <Modal show={showThanksModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent successful</Modal.Title>
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
