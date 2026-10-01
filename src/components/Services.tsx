import { ArrowUpRight, Browsers, Code, PenNib } from "@phosphor-icons/react";

const services = [
  { title: "Web Development", icon: Code, description: "Websites built to work beautifully. From development and hosting to content management and domains, we bring the whole experience together.", details: ["Custom websites", "Content management", "Hosting & domains"] },
  { title: "UX/UI Design", icon: Browsers, description: "Clear journeys. Considered interfaces. We turn complex ideas into intuitive experiences, from the first wireframe to the final interactive prototype.", details: ["User experience", "Interface design", "Interactive prototypes"] },
  { title: "Branding", icon: PenNib, description: "A distinct identity, wherever your brand shows up. Logos, visual systems, and guidelines that give every touchpoint a consistent point of view.", details: ["Visual identity", "Logo design", "Brand guidelines"] },
];

function Services() {
  return (
    <section className="services page-padding section-space" id="services" aria-labelledby="services-title">
      <div className="services-intro">
        <h2 id="services-title">Your next<br />creative leap.</h2>
        <p>Design and development, working together. One considered experience from your first idea to the final detail.</p>
        <a className="text-link" href="#contact">Contact <ArrowUpRight size={20} aria-hidden="true" /></a>
      </div>
      <div className="service-list">
        {services.map(({ title, icon: Icon, description, details }) => (
          <article className="service" key={title}>
            <div className="service-heading"><Icon size={30} weight="light" aria-hidden="true" /><h3>{title}</h3></div>
            <p>{description}</p>
            <ul className="service-details" aria-label={`${title} includes`}>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
