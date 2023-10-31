import trifectaImage from "../assets/projects/trifecta.jpg";
import soliditasImage from "../assets/projects/soliditas.png";
import stealthsquadImage from "../assets/projects/stealthsquad.png";

function Projects() {
  const projects = [
    {
      id: 1,
      image: trifectaImage,
      title: "Trifecta Weight Management",
      description: "Holistic Approach to Weight Management",
      stack: ["WordPress"],
      URL: "https://trifectaweightmanagement.com/",
    },
    {
      id: 2,
      image: soliditasImage,
      title: "Soliditas",
      description: "Construction Company UI Mockup",
      stack: ["Figma", "Photoshop"],
      URL: "https://www.behance.net/gallery/181644131/SOLIDITAS-Construction-Company",
    },
    {
      id: 3,
      image: stealthsquadImage,
      title: "Stealth Squad",
      description: "Password Generator",
      stack: ["Vite", "Tailwind CSS", "Vercel"],
      URL: "https://stealth-squad.vercel.app/",
    },
  ];

  return (
    <>
      <div className="page-padding">
        <div className="main-projects-container">
          <h4>Featured Projects</h4>
          <div className="projects-section">
            <div className="cursor">View</div>
            {projects.map((project) => (
              <div key={project.id} className="project-card">
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
                    {project.stack.map((tech) => (
                      <span className="stack-wrapper" key={tech}>
                        {tech}
                      </span>
                    ))}
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
