import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

const YOUR_EMAIL="anishu2001@gmail.com"

export const ContactUs = ({ contactConfig }) => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    alertMessage: "",
    show: false,
    variant: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormdata({
          name: "",
          email: "",
          message: "",
          loading: false,
          alertMessage: "Message sent successfully!",
          variant: "success",
          show: true,
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setFormdata({
        ...formData,
        loading: false,
        alertMessage: error.message,
        variant: "danger",
        show: true,
      });
    }
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Me</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Get in </h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${YOUR_EMAIL}`}>
              anishu2001@gmail.com
            </a>
            <br />
            <br />
  
              <p>
                <strong>Phone:</strong> 7644035986
              </p>
            
          </address>
          <p>Contact for hiring me</p>
        </Col>
        <Col lg="7">
          <form onSubmit={handleSubmit} className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  type="text"
                  required
                  onChange={handleChange}
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <textarea
              className="form-control"
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="submit">
                  {formData.loading ? "Sending..." : "Send"}
                </button>
              </Col>
            </Row>
          </form>
          {formData.show && (
            <div className={`alert alert-${formData.variant}`}>
              {formData.alertMessage}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};
