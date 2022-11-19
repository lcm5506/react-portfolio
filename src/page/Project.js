import React from "react";
import Card from "../component/Card";

function Project() {
  return (
    <>
      <div className="container-fluid main-container bg-dark flex-column">
        <h1 className="display-1 d1-text-shadow text-center mb-5 hr-text">
          Projects
        </h1>
        <h2 class="display-2 d2-text-shadow text-center mb-5 mt-5 hr-text">
          HTML, CSS and Javascript
        </h2>
        <div class="card-container section-container">
          <Card
            className="card-md hover-float bg-dark"
            img={
              <img
                src={require("../image/Sort_Algorithm_Visualizer.png")}
                alt="Screenshot of Sorting Algorithm Visualizer Application developed in HTML, CSS and Javascript"
                class="card-img card-img-top"
              />
            }
            title="Sort Algorithm Visualizer"
            text={
              <>
                Classic sorting algorithm visualizer. Designed to help you
                understand sorting algorithms easier.
                <span className="abridged-text-dots">...</span>
                <span class="abridged-text">
                  It let you select sorting algorithm, sample size, and
                  animation speed. <br />
                  Sorting algorithms implemented are as follows:
                  <br />
                  <ul>
                    <li>Insertion Sort</li>
                    <li>Selection Sort</li>
                    <li>Merge Sort</li>
                    <li>Bubble Sort</li>
                    <li>Heap Sort</li>
                    <li>Bubble Sort</li>
                  </ul>
                </span>
              </>
            }
            external="./projects/Sorting Algorithm Visualization/index.html"
            git="https://github.com/lcm5506/web-sort-algorithm-visualizer"
            modalEnable={true}
          />
          <Card
            className="card-md hover-float bg-dark"
            img={
              <img
                src={require("../image/Web_Pathfind_2.png")}
                alt="Screenshot of pathfinding algorithm visualizer project"
                class="card-img card-img-top"
              />
            }
            title={<>Pathfind Algorithm Visualizer</>}
            text={
              <>
                This project is designed to visualize pathfinding algorithms.
                User can design a maze and it will find a path from point A to
                point B.
                <span className="abridged-text-dots">...</span>
                <span class="abridged-text">
                  Users can select sorting algorithm and animation speed. Also
                  users can create their own unique mazes by simply clicking and
                  dragging. Black tiles drawn represent obstacles and
                  pathfinding algorithms will go around created obstacles to
                  find optimal path.
                  <br />
                  Pathfinding algorithms implemented are as follows:
                  <br />
                  <ul>
                    <li>Depth First Search</li>
                    <li>Breadth First Search</li>
                    <li>Djikstra's Algorithm</li>
                    <li>A*</li>
                  </ul>
                </span>
              </>
            }
            git={"https://github.com/lcm5506/web-pathfind-visualizer"}
            external={"./projects/PathFind Algorithm Visualization/index.html"}
            modalEnable={true}
          />

          <Card
            className="card-md hover-float bg-dark"
            img={
              <img
                src={require("../image/Discord_Clone_Demo.png")}
                alt="Screenshot of discord clone demo project"
                class="card-img card-img-top"
              />
            }
            title={<>Discord Clone Demo</>}
            text={
              <>
                This project utilizes websocket protocol using socket.io to
                provide chat app with multiple server and channel functionality.
                <span className="abridged-text-dots">...</span>
                <span class="abridged-text">
                  On connection, users are given random userid. Messages to
                  different channels are displayed on its corresponding channel
                  tab. Design is based on Discord Application.
                  <br />
                  *Server needs to be running in order for this project to
                  function.
                  <br />
                </span>
              </>
            }
            git={"https://github.com/lcm5506/DiscordCloneDemo"}
            external={"./projects/DiscordCloneDemo/index.html"}
            modalEnable={true}
          />
          {/* <Card
            className="card-md hover-float bg-dark"
            img={}
            title={<></>}
            text={
              <>
              </>
            }
            git={}
            external={}
          /> */}
        </div>
        <h2 className="display-2 d2-text-shadow text-center mb-5 mt-5 hr-text">
          Java
        </h2>
        <div className="card-container section-container">
          <Card
            className="card-md hover-float bg-dark"
            img={
              <img
                src={require("../image/Java_Maze_Generator.png")}
                alt=""
                class="card-img card-img-top"
              />
            }
            title={<>Maze Generator/Solver</>}
            text={
              <>
                This application generates a maze and solves it using different
                algorithms. The application also animates the process for
                visualization.
                <span className="abridged-text-dots">...</span>
                <span class="abridged-text">
                  Maze generation algorithms implemented are as follows:
                  <br />
                  <ul>
                    <li>Randomized Depth First Search</li>
                    <li>Randomized Kruskal's Algorithm</li>
                  </ul>
                  <br />
                  Maze solving algorithms implemented are as follows:
                  <br />
                  <ul>
                    <li>Depth First Search</li>
                    <li>Breadth First Search</li>
                    <li>Djikstra's Algorithm</li>
                    <li>A*</li>
                  </ul>
                </span>
              </>
            }
            git={"https://github.com/lcm5506/DiscordCloneDemo"}
            modalEnable={true}
          />
          <Card
            className="card-md hover-float bg-dark"
            img={
              <img
                src={require("../image/Java_POSDemo.png")}
                alt=""
                class="card-img card-img-top"
              />
            }
            title={<>POS Demo</>}
            text={
              <>
                This application is a demo of a Point Of Sale System.
                <span className="abridged-text-dots">...</span>
                <span class="abridged-text">
                  Functionalities include:
                  <br />
                  <ul>
                    <li>Adding, removing tables and modifying their layout.</li>
                    <li>Adding, removing, editing employee information.</li>
                    <li>Adding, removing, editing sales items in the menu.</li>
                    <li>
                      Adding or removing of ordered menu items to a specific
                      table.
                    </li>
                    <li>
                      All the information relevent are stored in MySQL database.
                    </li>
                  </ul>
                </span>
              </>
            }
            git={"https://github.com/lcm5506/DiscordCloneDemo"}
            modalEnable={true}
          />
        </div>
      </div>
    </>
  );
}

export default Project;
