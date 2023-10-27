import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";

function NavBar() {
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
        <div className="navbar">
          <motion.div
            className="navbar-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="nav-left">
              <img className="img-logo" src="./logo_white.svg" />
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              className="nav-center desktop-menu"
              variants={itemVariants}
            >
              <span className="navbar-menu-item">About</span>
              <span className="navbar-menu-item">Services</span>
              <span className="navbar-menu-item">Projects</span>
            </motion.div>

            {/* Mobile Menu */}
            <div className="hamburger-container mobile-menu">
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="menu-button">☰</Menu.Button>
                    <Menu.Items className={`menu-items ${open ? "open" : ""}`}>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            className={`menu-item ${active ? "active" : ""}`}
                          >
                            About
                          </span>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            className={`menu-item ${active ? "active" : ""}`}
                          >
                            Services
                          </span>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            className={`menu-item ${active ? "active" : ""}`}
                          >
                            Projects
                          </span>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </>
                )}
              </Menu>
            </div>

            <motion.div className="nav-right" variants={itemVariants}>
              <div className="button">
                <div className="button-text">Contact</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
