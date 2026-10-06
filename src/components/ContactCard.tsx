import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "@phosphor-icons/react";

const email = "nazimsesen@gmail.com";

function ContactCard() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setStatus("error");
    }
  }

  return (
      <section className="contact-wrap page-padding section-space" id="contact" aria-labelledby="contact-title">
        <div className="contact-panel">
          <img src={`${import.meta.env.BASE_URL}contact-logo.svg`} alt="" width="74" height="74" className="contact-mark" />
          <h2 id="contact-title">Ready for your next<br /><span>standout project?</span></h2>
          <div className="contact-bottom">
            <div className="contact-details">
              <p>Tell us what you have in mind.</p>
              <div className="email-row">
                <a className="email-link" href={`mailto:${email}`}>{email}</a>
                <button type="button" className="copy-button" onClick={copyEmail} aria-label={status === "copied" ? "Email address copied" : "Copy email address"}>
                  {status === "copied" ? <Check size={21} aria-hidden="true" /> : <Copy size={21} aria-hidden="true" />}
                </button>
              </div>
              <p className="copy-status" role="status">{status === "copied" ? "Email copied." : status === "error" ? "Couldn't copy. Select the email address or open the email link." : ""}</p>
            </div>
            <a className="button button-dark" href={`mailto:${email}`}>Contact <ArrowUpRight size={22} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
  );
}

export default ContactCard;
