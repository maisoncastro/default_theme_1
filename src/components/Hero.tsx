import { ArrowDownRight, ArrowUpRight } from "@phosphor-icons/react";
import soliditasImage from "../assets/projects/soliditas.webp";
import trifectaImage from "../assets/projects/trifecta.webp";

function Hero() {
  return (
    <section className="hero page-padding" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Crafting digital <span>excellence.</span></h1>
        <p className="hero-description">Custom web development, UX/UI design, and branding for your next standout project.</p>
        <div className="hero-actions">
          <a className="button" href="#projects">View projects <ArrowDownRight size={22} aria-hidden="true" /></a>
          <a className="text-link" href="#contact">Contact <ArrowUpRight size={19} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-work" aria-label="A preview of our work">
        <a className="hero-work-primary" href="https://www.behance.net/gallery/181644131/SOLIDITAS-Construction-Company" target="_blank" rel="noopener noreferrer" aria-label="Explore Soliditas on Behance (opens in a new tab)">
          <img src={soliditasImage} alt="Soliditas identity, with classical architecture and bold typography" width="808" height="632" fetchPriority="high" />
          <span className="hero-work-caption">Soliditas <ArrowUpRight size={20} aria-hidden="true" /></span>
        </a>
        <a className="hero-work-secondary" href="https://trifectaweightmanagement.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Trifecta Weight Management (opens in a new tab)">
          <img src={trifectaImage} alt="Trifecta's pink and avocado project imagery" width="1200" height="801" />
          <span className="hero-work-caption">Trifecta <ArrowUpRight size={18} aria-hidden="true" /></span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
