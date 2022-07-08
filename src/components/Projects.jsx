import React from "react";
// import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects">
        <div className="projects-title">
        <div className="line-projects"></div>
        <h3>Proyectos</h3>
        </div>
        <div className="projects-cards">
        <div class="cards">
          <div class="img-container">
            <img src="./imgs/road-to-hell.png" alt="road" />
            <div class="img-content">
              <h3>Road To Hell</h3>
              <p>Rock, cerveza y un poquito de irreverencia</p>
              <a
                href="https://javipitino.github.io/Road-to-Hell/"
                className="btn btn-primary"
                target="blank"
              >
                <button>Vamos!</button>
              </a>
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="img-container">
            <img src="./imgs/wines-routes.png" alt="wines" />
            <div class="img-content">
              <h3>Wines.Routes</h3>
              <p>Una plataforma para los amantes del vino</p>
              <a
                href="https://javipitino.github.io/Road-to-Hell/"
                className="btn btn-primary"
                target="blank"
              >
                <button>Vamos!</button>
              </a>
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="img-container">
            <img src="./imgs/ecocajas.png" alt="huerto" />
            <div class="img-content">
              <h3>El Huerto Ecológico</h3>
              <p>Para los que buscan una manera más sostenible y ecológica de alimentarse</p>
              <a
                href="https://javipitino.github.io/Road-to-Hell/"
                className="btn btn-primary"
                target="blank"
              >
                <button>vamos!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
