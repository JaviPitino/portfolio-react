import React from "react";

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
        <a href={"#home"}>
            <div className="go-top-btn">
                <i className="fas fa-chevron-up"></i>
            </div>
        </a>
        </div>
      {/* <Link to={"#home"}>
        <button id="button"></button>
      </Link> */}
      <div className="line-footer"></div>
      <footer className="footer">
        {" "}
        Designed by &nbsp;<span>Javi López </span> &nbsp; | 2022{" "}
      </footer>
    </div>
  );
}

export default Footer;
