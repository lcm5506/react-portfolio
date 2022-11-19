import React from "react";

function Contact() {
  return (
    <>
      <div className="container-fluid main-container bg-dark flex-column ja-center">
        <h1 className="display-1 d1-text-shadow text-center mb-5 hr-text">
          Contact
        </h1>
        <div className="row">
          <div className="contact-container col-lg-6">
            <div className="contact-item">
              <div className="contact-icon">
                <i class="fa-solid fa-address-card"></i>Name:
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
                <i class="fa-solid fa-envelope"></i>Email:
              </div>
              <div className="contact-text">contact@charleeportfolio.com</div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i class="fa-solid fa-earth-americas"></i>Language:
              </div>
              <div className="contact-text">English / Korean</div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fa-brands fa-github"></i>Github:
              </div>
              <div class="contact-text">
                <span>
                  <a href="https://github.com/lcm5506?tab=repositories">
                    lcm5506
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="contact-container col-lg-6">
            <form
              id="email-form"
              action="https://formsubmit.co/contact@charleeportfolio.com"
              method="POST"
            >
              <div className="form-row row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    id="email-name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    id="email-address"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <input
                type="text"
                name="title"
                id="email-title"
                placeholder="Title"
                required
              />
              <textarea
                name="content"
                id="email-content"
                cols="30"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <input
                type="hidden"
                name="_next"
                value="http://127.0.0.1:5500/thanks.html"
              />
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
