import Marquee from "react-fast-marquee";

function Hero() {
  return (
    <>
      <div className="page-padding">
        <div className="main-hero-container">
          <div className="hero-title">
            <h1 className="">
              Crafting Digital Excellence,
              <br />
              One Pixel at a Time
            </h1>
            <span className="hero-subtitle">
              Unveiling a New Realm of Online Engagement Through Custom-Crafted
              Web Designs
            </span>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img className="hero-image" src="/placeholder-gradient.jpg/" />
            </div>
          </div>
          <div className="hero-banner">
            <Marquee className="marquee" loop={0} autoFill={true}>
              <span>+++</span>
              <span>DIGITAL AGENCY BASED IN MONTREAL</span>
              <span>WEB DEVELOPMENT</span>
              <span>UX/UI DESIGN</span>
              <span>BRANDING</span>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
