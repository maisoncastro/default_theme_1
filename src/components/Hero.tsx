import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 2 } },
  };

  return (
    <>
      <div className="page-padding">
        <div className="main-hero-container">
          <motion.div
            className="hero-title"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants}>
              Crafting Digital Excellence,
              <br />
              One Pixel at a Time
            </motion.h1>
            <motion.span className="hero-subtitle" variants={itemVariants}>
              Unveiling a New Realm of Online Engagement Through Custom-Crafted
              Web Designs
            </motion.span>
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
