import React from 'react'
// import { Link } from 'react-router-dom'

function About() {
  return (
    // <!-- ABOUT -->
    <section id="about">
      <div className="container-about">
        <div className="about-left">
          <div className="line-about"></div>
          <h3>About me</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt ipsa est, perspiciatis
            tempora
            necessitatibus fugiat esse quod nobis amet dolores eos veritatis harum? Reiciendis nam, qui iusto
            eveniet error magni libero cumque nulla necessitatibus quasi quas non unde! Voluptatem.</p>
          <div className="line-about"></div>
          <h3 id="contact">Contact</h3>
          <p>
            <a href="https://github.com/JaviPitino" alt="github" target="_blank" ><i className="icon fa-brands fa-github">
              </i></a>
            <a href="https://www.linkedin.com/in/javier-lopez-diaz/" alt="linkedin" target="_blank"><i
                className="icon fa-brands fa-linkedin"></i></a>
            <a href="mailto:javierpitino@gmail.com"><i className="icon fa-solid fa-envelope"></i></a>
          </p>
        </div>
        <div className="about-right">
          <img src="./imgs/javi-lopez-portfolio.png" alt="perfil" />
        </div>
      </div>
    </section>
  )
}

export default About