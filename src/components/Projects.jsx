import React from "react";
// import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-title">
        <div className="line-projects"></div>
        <h3>Projects</h3>
      </div>
      <div className="cards">
        <div className="cada-carta" style={{ width: "25rem" }}>
          <img variant="top" src="./imgs/road-to-hell.png" alt="road" />
          <div className="card-body">
            <h4>Road To Hell!</h4>
            <p>
              Un pequeño juego de colisiones con estética ochentera realizado
              con javascript. Dosis de rock, cerveza, un poquito de irreverencia
              y mucho humor{" "}
            </p>
            <a
              href="https://javipitino.github.io/Road-to-Hell/"
              target={"_blank"}
            >
              {" "}
              <button>Go Hell!</button>{" "}
            </a>
          </div>
        </div>
        <div className="cada-carta" style={{ width: "25rem" }}>
          <img variant="top" src="./imgs/wines-routes.png" alt="wines" />
          <div className="card-body">
            <h4>Wine.Routes</h4>
            <p>
              Un pequeño juego de colisiones con estética ochentera realizado
              con javascript. Dosis de rock, cerveza, un poquito de irreverencia
              y mucho humor{" "}
            </p>
            <a
              href="https://wine-routes.herokuapp.com/"
              target={"_blank"}
            >
              {" "}
              <button>Go for Wines!</button>{" "}
            </a>
          </div>
        </div>
        <div className="cada-carta" style={{ width: "25rem" }}>
          <img variant="top" src="./imgs/ecocajas.png" alt="road" />
          <div className="card-body">
            <h4>El Huerto Ecológico</h4>
            <p>
              Un pequeño juego de colisiones con estética ochentera realizado
              con javascript. Dosis de rock, cerveza, un poquito de irreverencia
              y mucho humor{" "}
            </p>
            <a
              href="https://ecocajas.netlify.app/"
              target={"_blank"}
            >
              {" "}
              <button>Go for food!</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
