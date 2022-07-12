import React from 'react'

function Progessbar() {

    let progressBar = document.querySelector('.progressbar');

    function scrollProgressBar() {

        // scrollTop -> es lo que avanza el scroll
        let scrollTop = document.documentElement.scrollTop; 

        // scrollHeight -> es el alto total
        let scrollHeight = document.documentElement.scrollHeight;

        // clientHeight -> Es lo que se ve en la pantalla en ese momento
        let clientHeight = document.documentElement.clientHeight;

        // windowHeight -> El resto de la ventana
        let windowHeight = scrollHeight - clientHeight;
        let porcentaje = scrollTop /  windowHeight * 100;

        progressBar.style.width = porcentaje + '%';
    }

    window.addEventListener('scroll', scrollProgressBar)

  return (
    <div className='container-progressbar'>
        <div className='progressbar'></div>
    </div>
  )
}

export default Progessbar