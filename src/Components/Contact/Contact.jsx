import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBug,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({ success: false, message: "" });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus({ success: false, message: "" });

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Michel MUNEZERO",
      reply_to: formData.email,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendStatus({
            success: true,
            message: "Message sent successfully! I'll get back to you soon.",
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setSendStatus({
            success: false,
            message:
              "Failed to send message. Please try again or email me directly.",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Get in touch with me</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div>
                <h3>Location</h3>
                <p>Kigali, Rwanda</p>
              </div>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <h3>Email</h3>
                <p>michelmunezero25@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <h3>Phone</h3>
                <p>+250 791 268 906</p>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/MichelMUNEZERO"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://twitter.com/your-twitter"
                target="_blank"
                rel="noopener noreferrer"
                title="X (Twitter)"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~018d50e1b0eda9d9c8"
                target="_blank"
                rel="noopener noreferrer"
                title="Upwork"
              >
                <FontAwesomeIcon icon={faUpwork} />
              </a>
              <a
                href="https://platform.utest.com/account/my-profile/"
                target="_blank"
                rel="noopener noreferrer"
                title="uTest"
              >
                <FontAwesomeIcon icon={faBug} />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {sendStatus.message && (
              <p
                className={`status-message ${
                  sendStatus.success ? "success" : "error"
                }`}
              >
                {sendStatus.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
