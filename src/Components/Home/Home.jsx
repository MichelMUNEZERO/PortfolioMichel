import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

const Home = () => {
  const backgroundStyle = {
    "--bg-image": `url(${process.env.PUBLIC_URL}/Michel.jpg)`,
  };

  return (
    <section id="home" className="home-section" style={backgroundStyle}>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Michel MUNEZERO</span>
            <br />
            <span className="typing">Web Developer</span>
          </h1>
          <p className="home-description">
            I create beautiful and functional websites with modern technologies.
            Let's build something amazing together!
          </p>
          <div className="home-buttons">
            <a href="#portfolio" className="btn primary-btn">
              View My Work
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
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
        <div className="home-image">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
