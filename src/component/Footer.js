import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="brand d-flex ja-center">
          <h1 className="display-1">
            <i class="fa-regular fa-face-smile brand-icon"></i>
            Charlee
          </h1>
        </div>
        <div className="contact d-flex flex-column">
          <div className="contact-item">
            <div className="contact-icon">
              <i class="fa-solid fa-signature"></i>Name:{" "}
            </div>
            <div className="contact-text">Chang-Mog (Charles) Lee</div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <i class="fa-solid fa-location-dot"></i>Location:
            </div>
            <div className="contact-text">Edmonton, Canada</div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <i class="fa-solid fa-envelope"></i>Email:{" "}
            </div>
            <div className="contact-text">contact@charleeportfolio.com</div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <i class="fa-brands fa-github"></i>Github:{" "}
            </div>
            <div className="contact-text">
              <a href="https://github.com/lcm5506">lcm5506</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
