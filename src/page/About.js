import React, { useEffect, useRef } from "react";
import "./About.css";
import Card from "../component/Card";

function About() {
  const skillContainerRef = useRef();
  useEffect(() => {
    let observerRefValue = null;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("on-screen", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    if (skillContainerRef.current) {
      intersectionObserver.observe(skillContainerRef.current);
      observerRefValue = skillContainerRef.current;
    }
    return () => {
      if (observerRefValue) intersectionObserver.unobserve(observerRefValue);
    };
  }, [skillContainerRef]);
  return (
    <>
      <div className="container-fluid main-container bg-dark flex-column">
        <h1 className="display-1 d1-text-shadow text-center mb-5 hr-text">
          About Me
        </h1>
        <div className="section-container grid-2-columns mh-auto">
          <p className="intro-text container-item">
            I am a self-taught software developer. I have fundamental knowledge
            of and familiar with core programming concepts such as OOP, SOLID
            principles, Design Patterns, writing clean code, multithreading, and
            dynamic programming. Also I am proficient in Java, MySQL, HTML, CSS,
            and Javascript.
            <br />
            <br />I can learn fast and adapt newly acquired knowledge to use
            quickly. <br />
            <br />I also have experience running and managing a restaurant. I
            have experience in hiring employees, managing inventory, managing
            employee shifts, managing payroll, etc.
          </p>
          <div className="card-container container-item">
            <Card
              className="card-sm hover-float hover-highlight bg-primary"
              title="+5 Projects"
              text="Multiple personal projects using Java, HTML, CSS and Javascript."
              modalEnable={false}
            ></Card>
            <Card
              className="card-sm hover-float hover-highlight bg-primary"
              title="Management Experience"
              text="10 years of exprience running a small restaurant."
              modalEnable={false}
            ></Card>
          </div>
        </div>
      </div>
      <div className="container-fluid main-container bg-dark flex-column ja-center">
        <h2 className="display-2 d2-text-shadow text-center mb-5 mt-5 hr-text">
          Skills
        </h2>
        <div
          class="section-container grid-2-columns mh-auto"
          ref={skillContainerRef}
        >
          <div class="skill">
            <h4 class="skill-header">HTML</h4>

            <div class="skill-bar">
              <div class="skill-bar-fill" id="fill-HTML"></div>
            </div>
            <h6 class="skill-percentage header-6">70%</h6>
          </div>
          <div class="skill">
            <h4 class="skill-header header-4">Java</h4>
            <div class="skill-bar">
              <div class="skill-bar-fill" id="fill-Java"></div>
            </div>
            <h6 class="skill-percentage text-content">80%</h6>
          </div>
          <div class="skill">
            <h4 class="skill-header header-4">CSS</h4>
            <div class="skill-bar">
              <div class="skill-bar-fill" id="fill-CSS"></div>
            </div>
            <h6 class="skill-percentage text-content">70%</h6>
          </div>

          <div class="skill">
            <h4 class="skill-header header-4">SQL</h4>
            <div class="skill-bar">
              <div class="skill-bar-fill" id="fill-SQL"></div>
            </div>
            <h6 class="skill-percentage text-content">60%</h6>
          </div>
          <div class="skill">
            <h4 class="skill-header header-4">Javascript</h4>
            <div class="skill-bar">
              <div class="skill-bar-fill" id="fill-Javascript"></div>
            </div>
            <h6 class="skill-percentage">90%</h6>
          </div>
          <div class="skill">
            <h4 class="skill-header header-4">React</h4>
            <div class="skill-bar">
              <div class="skill-bar-fill" id="fill-React"></div>
            </div>
            <h6 class="skill-percentage text-content">70%</h6>
          </div>
        </div>
      </div>
      <div className="container-fluid main-container bg-dark flex-column">
        <h2 className="display-2 d2-text-shadow text-center mb-8 mt-5 hr-text">
          Java Skills and Tools
        </h2>
        <div
          id="5B0FE09AAD96A68E2FB51B28F02749AAAC2_18646"
          className="tree-container"
        >
          <div id="5B0FE09AAD96A68E2FB51B28F02749AAAC2_18646_robot">
            <img
              src="https://cloud.smartdraw.com/cloudstorage/5B0FE09AAD96A68E2FB51B28F02749AAAC2/preview2.png"
              alt="Skills and Tools I have for Java"
              className="skilltree-img"
            />
          </div>
        </div>
        <script
          src="https://cloud.smartdraw.com/plugins/html/js/sdjswidget_html.js"
          type="text/javascript"
        ></script>
        <script type="text/javascript">
          SDJS_Widget("5B0FE09AAD96A68E2FB51B28F02749AAAC2", 18646, 1, "");
        </script>
        <br />
      </div>

      <div className="container-fluid main-container bg-dark flex-column">
        <h2 className="display-2 d2-text-shadow text-center mb-8 mt-5 hr-text">
          Web Dev Skills and Tools
        </h2>
        <div
          id="8FA2A3241F24E6C41C7F4B0937328481FDF_94752"
          className="tree-container"
        >
          <div id="8FA2A3241F24E6C41C7F4B0937328481FDF_94752_robot">
            <img
              src="https://cloud.smartdraw.com/cloudstorage/8FA2A3241F24E6C41C7F4B0937328481FDF/preview2.png"
              alt="Skills and Tools I have for Web Development"
              className="skilltree-img"
            />
          </div>
        </div>
        <script
          src="https://cloud.smartdraw.com/plugins/html/js/sdjswidget_html.js"
          type="text/javascript"
        ></script>
        <script type="text/javascript">
          SDJS_Widget("8FA2A3241F24E6C41C7F4B0937328481FDF", 94752, 1, "");
        </script>
        <br />
      </div>
      <div className="container-fluid main-container bg-dark flex-column">
        <h2 className="display-2 d2-text-shadow text-center mb-8 mt-5 hr-text">
          Timeline
        </h2>
        <div class="grid-2-columns timeline-container mh-auto section-container">
          <div class="timeline">
            <div class="timeline-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <div class="timeline-year text-content">2016-2022</div>
            <h4 class="timeline-title header-4">Owner / Manager</h4>
            <div class="timeline-company text-content">
              @ Washoku Bistro <span>- Edmonton, AB</span>
            </div>
            <div class="timeline-content text-content">
              Operated restaurant as Manager and Sushi Chef. Overseen overall
              management of the business including hiring and training of
              staffs, inventory management, and making food.
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <div class="timeline-year text-content">2014-2015</div>
            <h4 class="timeline-title header-4">Sushi Chef</h4>
            <div class="timeline-company text-content">
              @ Kobe Japanese Bistro <span>- Edmonton, AB</span>
            </div>
            <div class="timeline-content text-content">
              Work at sushi bar with other chefs making maki rolls, boats and
              various appetizers. Duties also include prep and clean before and
              after each shift.
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <div class="timeline-year text-content">2013-2014</div>
            <h4 class="timeline-title header-4">Sushi Chef</h4>
            <div class="timeline-company text-content">
              @ Dake Japanese Restaurant <span>- Waterloo, ON</span>
            </div>
            <div class="timeline-content text-content">
              Work at sushi bar with other chefs making sushi, sashimi, maki
              rolls, boats and various appetizers. Duties also include prep and
              clean before and after each shift.
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <div class="timeline-year text-content">2012-2013</div>
            <h4 class="timeline-title header-4">Manager</h4>
            <div class="timeline-company text-content">
              @ Dake Japanese Restaurant <span>- Waterloo, ON</span>
            </div>
            <div class="timeline-content text-content">
              Operated restaurant as Manager. Overseen overall management of the
              business including hiring and training of staffs, managing
              employee shifts, inventory management, and making sure all guests
              left with smile on.
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <div class="timeline-year text-content">2010-2010</div>
            <h4 class="timeline-title header-4">
              Quality Assurance Analyst(Co-op)
            </h4>
            <div class="timeline-company text-content">
              @ Platespin Ltd <span>- Toronto, ON</span>
            </div>
            <div class="timeline-content text-content">
              Work with Platespin products and various blade servers to ensure
              the highest quality of the products every step of the development
              process. Work with team members to create various scenarios and
              execute planned tests.
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <div class="timeline-year text-content">2008-2008</div>
            <h4 class="timeline-title header-4">
              Quality Assurance Analyst(Co-op)
            </h4>
            <div class="timeline-company text-content">
              @ Cancer Care Ontario <span>- Toronto, ON</span>
            </div>
            <div class="timeline-content text-content">
              Plan and execute various tests for programs using HP Quality
              Center. Report bugs and ensure that fixes are as intended. Work
              closely with developers and business coordinators to ensure that
              client's needs are met.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
