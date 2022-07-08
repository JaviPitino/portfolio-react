import React from "react";
import { Link } from "react-router-dom";


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
              <Link className="link" to={"#home"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to={"#about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="link" to={"#cv"}>
                Curriculum
              </Link>
            </li>
            <li>
              <Link className="link" to={"#projects"}>
                Proyectos
              </Link>
            </li>
          </ul>
          <Link className="logo" to={"#home"}>
            <img
              src="./imgs/logo-javi2-blanco.png"
              alt="logo-javi"
              className="logo"
              width="70px"
            />
          </Link>
        </div>
        <div className="line-navbar"></div>
      </nav>
    </section>
  );
}

export default Navbar;
