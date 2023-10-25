import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="page-padding">
        <div className="main-hero-container">
          <motion.div
            className="hero-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 className="">
              Crafting Digital Excellence,
              <br />
              One Pixel at a Time
            </h1>
            <span className="hero-subtitle">
              Unveiling a New Realm of Online Engagement Through Custom-Crafted
              Web Designs
            </span>
          </motion.div>
          <motion.div
            className="hero-image-container"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="hero-image-wrapper">
              <img className="hero-image" src="/placeholder-gradient.jpg/" />
            </div>{" "}
            <div className="hero-banner">
              <Marquee className="marquee" loop={0} autoFill={true}>
                <span>+++</span>
                <span>DIGITAL AGENCY BASED IN MONTREAL</span>
                <span>WEB DEVELOPMENT</span>
                <span>UX/UI DESIGN</span>
                <span>BRANDING</span>
              </Marquee>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
