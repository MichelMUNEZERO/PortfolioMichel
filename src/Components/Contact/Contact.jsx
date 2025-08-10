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
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({ success: false, message: "" });

  useEffect(() => {
    emailjs.init("4QcufM_4cy-ugl3yG"); // Replace with your EmailJS public key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus({ success: false, message: "" });

    emailjs
      .sendForm(
        "service_7krprop", // Replace with your EmailJS service ID
        "template_24vu669", // Replace with your EmailJS template ID
        form.current
      )
      .then(
        (result) => {
          console.log(result.text);
          setSendStatus({
            success: true,
            message: "Message sent successfully! I'll get back to you soon.",
          });
          e.target.reset();
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
                href="https://www.linkedin.com/in/michel-munezero-25b0a1234/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://x.com/lehcimunna"
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
                href="https://www.utest.com/profile/m.michel/about"
                target="_blank"
                rel="noopener noreferrer"
                title="uTest"
              >
                <FontAwesomeIcon icon={faBug} />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} ref={form}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
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
