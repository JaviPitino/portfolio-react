import React from "react";


function Navbar() {
  return (
    // <!-- CURRICULUM -->
    <section id="navbar">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="lines line1"></span>
            <span className="lines line2"></span>
            <span className="lines line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a className="link" href={"#home"}>
                Home
              </a>
            </li>
            <li>
              <a className="link" href={"#about"}>
                About
              </a>
            </li>
            <li>
              <a className="link" href={"#cv"}>
                Curriculum
              </a>
            </li>
            <li>
              <a className="link" href="#projects">
                Proyectos
              </a>
            </li>
          </ul>
          <a className="logo" href={"#home"}>
            <img
              src="./imgs/logo-javi2-blanco.png"
              alt="logo-javi"
              className="logo"
              width="70px"
            />
          </a>
        </div>
        <div className="line-navbar"></div>
      </nav>
    </section>
  );
}

export default Navbar;
