import React from "react";
import "./about.css";

const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ];

  const experiences = [
    {
      year: "2022 - Present",
      role: "Web Developer",
      company: "Freelance",
      description:
        "Working on various web development projects, focusing on creating responsive and user-friendly applications.",
    },
    {
      year: "2021 - 2022",
      role: "Software Tester",
      company: "uTest",
      description:
        "Performed software testing and quality assurance for various applications.",
    },
    {
      year: "2020 - 2021",
      role: "Junior Developer",
      company: "Freelance",
      description:
        "Started my journey in web development and software testing.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate web developer based in Kigali, Rwanda, with
              experience in creating beautiful and functional websites. I
              specialize in front-end development using modern technologies like
              React, and I'm also skilled in software testing.
            </p>
            <p>
              My goal is to build applications that are not only visually
              appealing but also provide great user experience and solve
              real-world problems.
            </p>
            <div className="contact-info">
              <p>
                <i className="fas fa-envelope"></i> michelmunezero25@gmail.com
              </p>
              <p>
                <i className="fas fa-phone"></i> +250 791 268 906
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Kigali, Rwanda
              </p>
            </div>
          </div>

          <div className="skills">
            <h3>My Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience">
            <h3>Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{exp.year}</div>
                  <div className="timeline-content">
                    <h4>{exp.role}</h4>
                    <h5>{exp.company}</h5>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
