function Projects() {
  const projects = [
    {
      id: 1,
      image: "src/assets/projects/trifecta.jpg",
      title: "Trifecta Weight Management",
      description: "Holistic Approach to Weight Management",
      stack: ["WordPress"],
    },
    {
      id: 2,
      image: "src/assets/projects/trifecta.jpg",
      title: "Soliditas",
      description: "Construction Company UI Mockup",
      stack: ["Figma", "Photoshop"],
    },
    {
      id: 3,
      image: "src/assets/projects/trifecta.jpg",
      title: "Stealth Squad",
      description: "Password Generator",
      stack: ["Vite", "Tailwind CSS"],
    },
  ];

  return (
    <>
      <div className="page-padding">
        <div className="main-projects-container">
          <h4>Featured Projects</h4>
          <div className="projects-section">
            {projects.map((project) => (
              <div className="project-card">
                <div key={project.id} className="project-item">
                  <div className="project-image-overlay"></div>
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="project-item-top">
                    <h3>{project.title}</h3>
                    <h4>{project.description}</h4>
                  </div>
                  <div className="project-item-bottom">
                    <span className="stack-wrapper">{project.stack}</span>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
