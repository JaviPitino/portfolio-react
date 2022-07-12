import React from "react";
import { Link } from 'react-router-dom'

function Footer() {

    window.onscroll = function() {
        if( document.documentElement.scrollTop > 600 ) {
            document.querySelector(".go-top-container")
            .classList.add('show');
        } else {
            document.querySelector(".go-top-container")
            .classList.remove('show');
        }
    }

  return (
    <div>
        <div className="go-top-container">
        <Link to={"#home"}>
            <div className="go-top-btn">
                <i className="fas fa-chevron-up"></i>
            </div>
        </Link>
        </div>
      {/* <Link to={"#home"}>
        <button id="button"></button>
      </Link> */}
      <div className="line-footer"></div>
      <footer className="footer">
        {" "}
        Designed & created by &nbsp;<span>Javi López </span> &nbsp; | 2022{" "}
      </footer>
    </div>
  );
}

export default Footer;
