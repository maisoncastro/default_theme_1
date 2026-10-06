import { ArrowUpRight } from "@phosphor-icons/react";
import trifectaImage from "../assets/projects/trifecta.webp";
import soliditasImage from "../assets/projects/soliditas.webp";
import stealthsquadImage from "../assets/projects/stealthsquad-detail.webp";

const projects = [
  { image: trifectaImage, title: "Trifecta Weight Management", description: "Holistic Approach to Weight Management", stack: ["WordPress"], url: "https://trifectaweightmanagement.com/", link: "Visit website", className: "project-trifecta", width: 1200, height: 801 },
  { image: soliditasImage, title: "Soliditas", description: "Construction Company UI Mockup", stack: ["Figma", "Photoshop"], url: "https://www.behance.net/gallery/181644131/SOLIDITAS-Construction-Company", link: "View on Behance", className: "project-soliditas", width: 808, height: 632 },
  { image: stealthsquadImage, title: "Stealth Squad", description: "Password Generator", stack: ["Vite", "Tailwind CSS", "Vercel"], url: "https://stealth-squad.vercel.app/", link: "Visit website", className: "project-stealth", width: 530, height: 770 },
];

function Projects() {
  return (
    <section className="projects page-padding section-space" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title">Featured projects<span className="project-count" aria-label="3 projects">(3)</span></h2>
        <p>A few ideas we've brought to life.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className={`project ${project.className}`} key={project.title}>
            <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="project-visual">
                <img src={project.image} alt="" width={project.width} height={project.height} loading="lazy" decoding="async" />
                <span className="project-open" aria-hidden="true"><ArrowUpRight size={27} /></span>
              </div>
              <div className="project-info">
                <div><h3>{project.title}</h3><p>{project.description}</p></div>
                <span className="project-destination">{project.link} <ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></span>
              </div>
            </a>
            <ul className="project-stack" aria-label={`${project.title} tools`}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
