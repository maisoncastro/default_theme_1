import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      }),
      { rootMargin: "-20% 0px -55% 0px" },
    );
    [...links, { href: "#home" }, { href: "#contact" }].forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    const media = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => setOpen(false);
    media.addEventListener("change", closeOnDesktop);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    function handleOutside(event: PointerEvent) {
      if (!panelRef.current?.contains(event.target as Node) && !triggerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="navbar page-padding" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Default_1 home" onClick={() => setOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}logo_white.svg`} alt="Default_1" width="144" height="26" />
        </a>
        <div className="desktop-links">
          {links.map((link) => <a key={link.href} href={link.href} className="nav-link" aria-current={active === link.href ? "location" : undefined}>{link.label}</a>)}
        </div>
        <a className="button button-small nav-contact" href="#contact">Contact <ArrowUpRight size={18} aria-hidden="true" /></a>
        <button ref={triggerRef} type="button" className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={24} aria-hidden="true" /> : <List size={24} aria-hidden="true" />}
        </button>
        <div ref={panelRef} id="mobile-navigation" className="mobile-navigation" hidden={!open} onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node) && event.relatedTarget !== triggerRef.current) setOpen(false);
        }}>
          {links.map((link) => <a key={link.href} href={link.href} aria-current={active === link.href ? "location" : undefined} onClick={() => setOpen(false)}>{link.label} <ArrowUpRight size={22} aria-hidden="true" /></a>)}
          <a href="#contact" onClick={() => setOpen(false)}>Contact <ArrowUpRight size={22} aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
