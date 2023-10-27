function ContactCard() {
  return (
    <>
      <div className="page-padding">
        <div className="main-container-contact-us">
          <div className="contact-us">
            <img src="/contact-logo.svg" alt="" />
            <div className="contact-us-bottom">
              <div className="contact-us-content">
                <h4>Contact</h4>
                <h2>
                  Ready to create your
                  <br /> next standout project?
                </h2>
              </div>
              <div className="button-text">
                <a href="mailto:nazimsesen@gmail.com" target="_blank">
                  <div className="button">Contact</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
