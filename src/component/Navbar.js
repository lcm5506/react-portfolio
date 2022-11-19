import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const [brandHover, setBrandHover] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link
          to="/"
          className="navbar-brand"
          onMouseEnter={() => setBrandHover(true)}
          onMouseLeave={() => setBrandHover(false)}
        >
          <h3>
            {brandHover ? (
              <i class="fa-regular fa-face-smile-wink brand-icon"></i>
            ) : (
              <i class="fa-regular fa-face-smile brand-icon"></i>
            )}
            Charlee
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink
                to="/"
                activeClassName="nav-link active"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName="nav-link active"
                className="nav-link"
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/project"
                activeClassName="nav-link active"
                className="nav-link"
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeClassName="nav-link active"
                className="nav-link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
