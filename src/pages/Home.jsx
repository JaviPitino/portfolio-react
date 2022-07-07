import React from 'react'

function Home() {

  return (
    // ---- HOME ---- 
    <div>
    <section id="home">
        <div class="rectangle"></div>
        <div id="hola">
        <h1 id="text">
            <span>Hola</span>
            <div class="message">
            <div class="word1">World!, </div>
            <div class="word2">Mundo!, </div>
            <div class="word3">World!, </div>
            </div>
        </h1>
        <h1>I´m Javi López</h1>
        <h4>
            Junior Full Stack Web Developer <br />
            & Graphic Designer
            </h4>
        <div class="line"></div>
        </div>
        <button class="learn-more"><a href="#about">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Show me más!</span>
        </a>
        </button>
    </section>
    </div>
  )
}

export default Home