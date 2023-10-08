import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const ResponsiveNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div className="navbarx">
        <div className="logo">
          <h1>Website</h1>
        </div>
        <div className="navlinkx">
          <div className={navbar ? "newlinks active" : "newlinks"}>
            <Link to="/" className="linkx">
              Home
            </Link>
            <Link to="/services" className="linkx">
              Services
            </Link>
            <Link to="/about" className="linkx">
              About
            </Link>
            <Link to="/contact" className="linkx">
              Contact
            </Link>
          </div>
          <div className="hamburger" onClick={ResponsiveNavbar}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
