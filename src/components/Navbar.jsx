import React from 'react'

function Navbar() {
  return (
    // <!-- CURRICULUM -->
    <section id="navbar">
  
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="lines line1"></span>
            <span class="lines line2"></span>
            <span class="lines line3"></span>
          </div>
          <ul class="menu-items">
            <li><a class="link" href="#home">Home</a></li>
            <li><a class="link" href="#about">About</a></li>
            <li><a class="link" href="#cv">Curriculum</a></li>
            <li><a class="link" href="#projects">Proyectos</a></li>
          </ul>
          <a class="logo" href="#home"><img src="./imgs/logo-javi2-blanco.png" alt="logo-javi" class="logo" width="70px" /></a>
        </div>
        <div class="line-navbar"></div>
      </nav>
    </section>
  )
}

export default Navbar