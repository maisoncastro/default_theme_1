import { ArrowUpRight } from "@phosphor-icons/react";

function About() {
  return (
    <section className="about page-padding section-space" id="about" aria-labelledby="about-title">
      <div className="about-title"><h2 id="about-title">One pixel<br />at a time.</h2><ArrowUpRight className="about-arrow" size={100} weight="light" aria-hidden="true" /></div>
      <div className="about-copy">
        <p className="about-statement">A digital agency based in Montreal, bringing design, development, and branding into one thoughtful experience.</p>
        <p>We shape how your brand looks, how your website works, and how people move through it. From first impression to final interaction, every detail has a job to do.</p>
        <a className="text-link" href="#contact">Contact <ArrowUpRight size={20} aria-hidden="true" /></a>
      </div>
    </section>
  );
}

export default About;
