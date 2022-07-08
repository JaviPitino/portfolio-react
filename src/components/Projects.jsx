import React from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink
              to="https://javipitino.github.io/Road-to-Hell/"
              target={"_blank"}
            >
              {" "}
              <button>Go Hell!</button>{" "}
            </NavLink>
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
            <NavLink
              to="https://javipitino.github.io/Road-to-Hell/"
              target={"_blank"}
            >
              {" "}
              <button>Go for Wines!</button>{" "}
            </NavLink>
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
            <NavLink
              to="https://javipitino.github.io/Road-to-Hell/"
              target={"_blank"}
            >
              {" "}
              <button>Go for food!</button>{" "}
            </NavLink>
          </div>
        </div>
      </div>

      {/* <CardGroup className="cardgroup" >
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src="./imgs/road-to-hell.png" />
            <Card.Body>
              <Card.Title>Road To Hell</Card.Title>
              <Card.Text>
                Un pequeño juego de colisiones con estético ochentera realizado
                con javascript. Dosis de rock, cerveza, un poquito de
                irreverencia y mucho humor
              </Card.Text>
              <Button variant="primary"> Go Hell! </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src="./imgs/wines-routes.png" />
            <Card.Body>
              <Card.Title>Road To Hell</Card.Title>
              <Card.Text>
                Un pequeño juego de colisiones con estético ochentera realizado
                con javascript. Dosis de rock, cerveza, un poquito de
                irreverencia y mucho humor
              </Card.Text>
              <Button variant="primary">Go Hell!</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src="./imgs/ecocajas.png" />
            <Card.Body>
              <Card.Title>Road To Hell</Card.Title>
              <Card.Text>
                Un pequeño juego de colisiones con estético ochentera realizado
                con javascript. Dosis de rock, cerveza, un poquito de
                irreverencia y mucho humor
              </Card.Text>
              <Button variant="primary">Go Hell!</Button>
            </Card.Body>
          </Card>
        </CardGroup> */}
    </section>
  );
}

export default Projects;
