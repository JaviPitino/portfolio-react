import React from "react";

function Curriculum() {
  return (
    <section id="cv">
      <div class="container-cv">
        <div class="cv-left">
          <div class="line-cv"></div>
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
          <div class="line-cv"></div>
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
        <div class="cv-right">
          <div class="line-cv"></div>
          <h3>Soft Skills</h3>
          <div class="soft-skills">
            {/* <!-- Creatividad --> */}
            <div class="soft-skill">
              <div class="skill-name">CREATIVIDAD</div>
              <div class="skill-bar">
                <div class="skill-per" per="85%" style={{maxWidth: "85%"}}></div>
              </div>
            </div>
            {/* <!-- Creatividad --> */}
            <div class="soft-skill">
              <div class="skill-name">RESPONSABILIDAD</div>
              <div class="skill-bar">
                <div class="skill-per" per="90%" style={{maxWidth: "90%"}}></div>
              </div>
            </div>
            {/* <!-- COMPROMISO --> */}
            <div class="soft-skill">
              <div class="skill-name">COMPROMISO</div>
              <div class="skill-bar">
                <div class="skill-per" per="95%" style={{maxWidth: "95%"}}></div>
              </div>
            </div>
            {/* <!-- RESOLUTIVO --> */}
            <div class="soft-skill">
              <div class="skill-name">RESOLUTIVO</div>
              <div class="skill-bar">
                <div class="skill-per" per="80%" style={{maxWidth: "80%"}}></div>
              </div>
            </div>
            {/* //  TRABAJO EN EQUIPO */}
            <div class="soft-skill">
              <div class="skill-name">TRABAJO EN EQUIPO</div>
              <div class="skill-bar">
                <div class="skill-per" per="85%" style={{maxWidth: "85%"}}></div>
              </div>
            </div>
            {/* <!-- COMUNICATIVO --> */}
            <div class="soft-skill">
              <div class="skill-name">COMUNICATIVO</div>
              <div class="skill-bar">
                <div class="skill-per" per="75%" style={{maxWidth: "75%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hard-skills">
        <div class="line-cv"></div>
        <h3>Hard Skills</h3>
        <div class="skills">
          <p>
            <i class="icon-skill fa-brands fa-html5"></i>
            <i class="icon-skill fa-brands fa-css3-alt"></i>
            <i class="icon-skill fa-brands fa-js-square"></i>
            <i class="icon-skill fa-brands fa-react"></i>
            <i class="icon-skill fa-brands fa-node-js"></i>
            <i class="icon-skill fa-brands fa-bootstrap"></i>
            <i class="icon-skill fa-brands fa-github"> </i>
            <i class="icon-skill fa-brands fa-git-alt"></i>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
