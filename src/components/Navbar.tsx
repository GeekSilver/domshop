import React from "react";
import { mlAuto } from "../styles";
  
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          domShop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDropdown"
          aria-controls="navbarDropdown"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarDropdown">
          <ul className="navbar-nav" style={mlAuto}>
            <li className="nav-item">
              <a href="/domain" className="nav-link">
                Domains
              </a>
            </li>
            <li className="nav-item">
              <a href="/support" className="nav-link">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="/signin" className="nav-link">
                Sign In
              </a>
            </li>
          </ul>
          <ul className="nav-item">

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
