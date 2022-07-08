import React from 'react'

function Home() {

  return (
    // ---- HOME ---- 
    <div>
    <section id="home">
        <div className="rectangle"></div>
        <div id="hola">
        <h1 id="text">
            <span>Hola</span>
            <div className="message">
            <div className="word1">World!, </div>
            <div className="word2">Mundo!, </div>
            <div className="word3">World!, </div>
            </div>
        </h1>
        <h1>I´m Javi López</h1>
        <h4>
            Junior Full Stack Web Developer <br />
            & Graphic Designer
            </h4>
        <div className="line"></div>
        </div>
        <button className="learn-more"><a href="#about">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">Show me más!</span>
        </a>
        </button>
    </section>
    </div>
  )
}

export default Home