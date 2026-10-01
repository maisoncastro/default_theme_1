import { ArrowUpRight } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="site-footer page-padding">
      <a className="footer-brand" href="#home" aria-label="Default_1 home">
        <img src={`${import.meta.env.BASE_URL}logo_white.svg`} alt="Default_1" width="112" height="20" />
      </a>
      <p>Design & development in Montreal.</p>
      <a className="text-link" href="#home">Back to top <ArrowUpRight size={18} aria-hidden="true" /></a>
    </footer>
  );
}

export default Footer;
