import React from "react";

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
            Recientemente me he graduado como Full Stack Web Developer en Ironhack. Un bootcamp de nueve semanas de duración muy intensas, donde he aprendido ha realizar aplicaciones web desde cero, manejando tanto la parte Backend, como la parte Frontend y utilizando entre otras las siguientes tecnologías: HTML, CSS, Javascript(ES6), MongoDB, Express, NodeJs, React, Handlebars, git, GitHub, Postman, Heroku, Netlify.
          </p>
          <div className="line-cv"></div>
          <h3 id="experience">Experience</h3>
          <h4>
            Diseñador gráfico en Diario de Cádiz &nbsp;{" "}
            <span> | &nbsp; Julio 2004 - Noviembre 2021 </span>{" "}
          </h4>
          <p>
            He desarrollado la mayor parte de mi carrera profesional como diseñador gráfico en el Diario de Cádiz, siendo parte del equipo de diseño y maquetación. Mi principal tarea consistía en maquetar el día a día del periódico, el diseño de suplementos y el tratamiento de fotografías, entre otras numerosas tareas diarias.
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
           <a href="./imgs/javi-lopez-esp2.pdf" alt="curriculum" target="blank"> <button className="btn-cv">Mira mi Curriculum</button></a>
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
            <img
            className="icon-skill img-skill"
            alt="photoshop"
            src="./imgs/adobe-photoshop.png"
            />
            <img
            className="icon-skill img-skill"
            alt="photoshop"
            src="./imgs/adobe-illustrator.png"
            />
              <img
            className="icon-skill img-skill"
            alt="photoshop"
            src="./imgs/adobe-indesign.png"
            />

          </p>
        </div>
      </div>
      <div className="line-curri"></div>
    </section>
  );
}

export default Curriculum;
