import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import "../styles/Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Have questions about ExportHaven? We'd love to hear from you.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-subtitle">
              Reach out to us through any of these channels or fill out the
              form.
            </p>

            <div className="info-items">
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:exporthaven124@gmail.com">
                    exporthaven124@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+94112345678">+94 11 234 5678</a>
                </div>
              </div>

              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Export Avenue, Colombo 03, Sri Lanka</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="info-item">
                <Globe className="info-icon" />
                <div>
                  <h4>Global Support</h4>
                  <p>24/7 Online Support Available</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows={6}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`submit-button ${submitted ? "submitted" : ""}`}
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <span className="check">✓</span>
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
