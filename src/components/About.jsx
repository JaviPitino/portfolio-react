import React from "react";
// import { Link } from 'react-router-dom'

function About() {
  return (
    // <!-- ABOUT -->
    <section id="about">
      <div className="container-about">
        <div className="about-left">
          <div className="line-about"></div>
          <h3>About me</h3>
          <p>
            Nací en Cádiz, una ciudad más que perfecta para llevar un ritmo de vida activo pero sin prisas y lo mejor de todo, rodeada de mar. 
            <br />
            <br />
            He desarrollado mi carrera profesional como diseñador gráfico en el sector editorial, debido al creciente estado de crisis que vive el sector decidí dar un cambio en mi carrera profesional y hacer el bootcamp de Web Developer de Ironhack.
            <br />
            <br />
            Me encanta involucrarme en cualquier proyecto que sirva para facilitar la vida de las personas siempre dejando mi impronta personal: una imagen visual cuidada y original. Soy una persona comprometida, creativa, responsable y resolutiva.
            <br />
            <br />
            Si quieres saber algo más sobre mí, sigue leyendo o pónte en contacto conmigo a través de los iconos que tienes justo aquí abajo.
          </p>
          <div className="line-about"></div>
          <h3 id="contact">Contact</h3>
          <p>
            <a href="https://github.com/JaviPitino" alt="github" target="blank">
              <i className="icon fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/javier-lopez-diaz/"
              alt="linkedin"
              target="blank"
            >
              <i className="icon fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:javierpitino@gmail.com">
              <i className="icon fa-solid fa-envelope"></i>
            </a>
          </p>
        </div>
        <div className="about-right">
          <img src="./imgs/javi-perfil-portfolio.png" alt="perfil" />
        </div>
      </div>
    </section>
  );
}

export default About;
