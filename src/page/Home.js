import React, { useEffect, useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Typing from "../component/Typing";

function Home() {
  const skillList = useRef();
  useEffect(() => {
    let observerRefValue = null;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("shown");
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );
    if (skillList.current) {
      intersectionObserver.observe(skillList.current);
      observerRefValue = skillList.current;
    }

    return () => {
      if (observerRefValue) intersectionObserver.unobserve(observerRefValue);
    };
  }, []);
  return (
    <>
      <div className="container-fluid hero-container">
        <h1 className="display-1 text-center">
          Hi! My name is&nbsp;
          <span className="secondary-text">Charles Lee</span>.
        </h1>
        <h2 className="display-2 text-center">
          <Typing
            content={[
              "I am Web-Developer in Edmonton, Canada.",
              "Welcome to my playground.",
            ]}
            startingDelay={2000}
            deletingDelay={3500}
          ></Typing>
        </h2>
        <div className="btn-container">
          <Link to="/about" className="hero-btn-reverse btn-styling">
            Let me introduce myself!
          </Link>
          <a
            href="/extra/Chang-Mog-Lee-Resume.pdf"
            className="hero-btn btn-styling"
            download
          >
            Download Resume<i class="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
      {/* <div className="container-fluid home-container bg-light">
        <h1 className="display-3 hr-text">My skill sets include ...</h1>

        <div className="skill-list" ref={skillList}>
          <div className="skill-container">
            <div
              className="primary-skill skill-list-item bg-primary"
              style={{ "--i": 1 }}
            >
              Java
            </div>
            <div
              className="secondary-skill skill-list-item bg-info"
              style={{ "--i": 2 }}
            >
              JDBC
            </div>
            <div
              className="secondary-skill skill-list-item bg-info"
              style={{ "--i": 3 }}
            >
              JPA
            </div>
            <div
              className="secondary-skill skill-list-item bg-info"
              style={{ "--i": 4 }}
            >
              Spring
            </div>
            <div
              className="secondary-skill skill-list-item bg-info"
              style={{ "--i": 5 }}
            >
              ...
            </div>
          </div>
          <div className="skill-container">
            <div
              className="primary-skill skill-list-item bg-primary"
              style={{ "--i": 6 }}
            >
              HTML, CSS, Javascript
            </div>
            <div
              className="secondary-skill skill-list-item bg-info"
              style={{ "--i": 7 }}
            >
              React
            </div>
            <div
              className="secondary-skill skill-list-item bg-info"
              style={{ "--i": 8 }}
            >
              Bootstrap
            </div>
            <div
              className="secondary-skill skill-list-item bg-info"
              style={{ "--i": 9 }}
            >
              ...
            </div>
          </div>
          <div className="skill-container">
            <div
              className="primary-skill skill-list-item bg-primary"
              style={{ "--i": 10 }}
            >
              SQL
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
