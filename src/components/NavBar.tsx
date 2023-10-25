import { motion } from "framer-motion";

function NavBar() {
  return (
    <>
      <div className="page-padding">
        <div className="navbar">
          <div className="navbar-container">
            <div className="nav-left">
              <img className="img-logo" src="./logo_white.svg" />
            </div>
            <div className="nav-center">
              <span className="navbar-menu-item">About</span>
              <span className="navbar-menu-item">Services</span>
              <span className="navbar-menu-item">Projects</span>
            </div>
            <div className="nav-right">
              <div className="button">
                <div className="button-text">Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
