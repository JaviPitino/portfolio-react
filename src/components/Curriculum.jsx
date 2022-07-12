import React from "react";
import { Link } from "react-router-dom";

function Curriculum() {

  return (
    <section id="cv">
      <div className="container-cv">
        <div className="cv-left">
          <div className="line-cv"></div>
          <h3>Where I Studied Desarrollo Web</h3>
          <h4>
            Ironhack WebDev Bootcamp &nbsp; <span> | &nbsp; Abril 2022 </span>{" "}
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            deserunt ipsa est, perspiciatis tempora necessitatibus fugiat esse
            quod nobis amet dolores eos veritatis harum? Reiciendis nam, qui
            iusto eveniet error magni libero cumque nulla necessitatibus quasi
            quas non unde! Voluptatem.
          </p>
          <div className="line-cv"></div>
          <h3 id="experience">Experience</h3>
          <h4>
            Diseñador gráfico en Diario de Cádiz &nbsp;{" "}
            <span> | &nbsp; Julio 2004 - Noviembre 2021 </span>{" "}
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            deserunt ipsa est, perspiciatis tempora necessitatibus fugiat esse
            quod nobis amet dolores eos veritatis harum? Reiciendis nam, qui
            iusto eveniet error magni libero cumque nulla necessitatibus quasi
            quas non unde! Voluptatem.
          </p>
        </div>
        <div className="cv-right">
          <div className="line-cv"></div>
          <h3>Soft Skills</h3>
          <div className="soft-skills">
            {/* <!-- Creatividad --> */}
            <div className="soft-skill">
              <div className="skill-name">CREATIVIDAD</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="85%"
                  style={{ maxWidth: "85%" }}
                ></div>
              </div>
            </div>
            {/* <!-- Creatividad --> */}
            <div className="soft-skill">
              <div className="skill-name">RESPONSABILIDAD</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="90%"
                  style={{ maxWidth: "90%" }}
                ></div>
              </div>
            </div>
            {/* <!-- COMPROMISO --> */}
            <div className="soft-skill">
              <div className="skill-name">COMPROMISO</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="95%"
                  style={{ maxWidth: "95%" }}
                ></div>
              </div>
            </div>
            {/* <!-- RESOLUTIVO --> */}
            <div className="soft-skill">
              <div className="skill-name">RESOLUTIVO</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="80%"
                  style={{ maxWidth: "80%" }}
                ></div>
              </div>
            </div>
            {/* //  TRABAJO EN EQUIPO */}
            <div className="soft-skill">
              <div className="skill-name">TRABAJO EN EQUIPO</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="85%"
                  style={{ maxWidth: "85%" }}
                ></div>
              </div>
            </div>
            {/* <!-- COMUNICATIVO --> */}
            <div className="soft-skill">
              <div className="skill-name">COMUNICATIVO</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="75%"
                  style={{ maxWidth: "75%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hard-skills">
        <div className="line-cv"></div>
        <h3>Hard Skills</h3>
        <div className="skills">
          <p>
            <i className="icon-skill fa-brands fa-html5"></i>
            <i className="icon-skill fa-brands fa-css3-alt"></i>
            <i className="icon-skill fa-brands fa-js-square"></i>
            <i className="icon-skill fa-brands fa-react"></i>
            <i className="icon-skill fa-brands fa-node-js"></i>
            <i className="icon-skill fa-brands fa-bootstrap"></i>
            <i className="icon-skill fa-brands fa-github"> </i>
            <i className="icon-skill fa-brands fa-git-alt"></i>
            {/* <img className="icon-skill" src="../imgs/adobe-photoshop.png" width={90} /> */}
          </p>
        </div>
      </div>
      <Link to={"#home"}>
        <button id="button"></button>
      </Link>
      <div className="line-curri"></div>
    </section>
  );
}

export default Curriculum;
