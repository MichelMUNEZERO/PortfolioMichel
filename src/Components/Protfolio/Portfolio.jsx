import React, { useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      image:
        "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      category: "web",
    },
    {
      id: 2,
      title: "AI-Powered Analytics",
      description:
        "Machine learning platform for predictive analytics and business intelligence.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      link: "#",
      category: "ai",
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description:
        "Cross-platform fitness tracking application with personalized workout plans.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#",
      category: "mobile",
    },
    {
      id: 4,
      title: "Blockchain Wallet",
      description:
        "Secure cryptocurrency wallet with multi-chain support and NFT integration.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      link: "#",
      category: "blockchain",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ai", label: "AI & ML" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "blockchain", label: "Blockchain" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore my latest work and creative projects
          </p>
        </div>

        <div className="filter-buttons">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    className="view-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
