

import React from 'react'

// import gato from 'img/gato.png'

// skils 

import GitHubIcon from '@mui/icons-material/GitHub';


const About = () => {
  return (
    <>
          <div className='row'>
            <h1 className='mouse '> Acerca de mi </h1>
          </div>
          <div className='row mt-5'>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              {/* <img className="img-fluid acerca" src={gato} alt='gato' /> */}
            </div>

            <p className='f-20 col-xs-12 col-sm-12 col-md-9 col-lg-9 semblansa'>
              Mi Gusto por las artes visuales me llevó al Diseño y mi curiosidad
              por cómo funcionan las cosas : a la programación , Desde entonces
              el Front-end se a convertido en la piedra angular de mi carrera
              profesional en la cual he participado tanto en proyectos con normas
              rigurosas en cuanto al flujo de la información como en desarrollos
              totalmente libres , así que integró lo mejor de dos mundos que
              convergen en el front-end.
              <br />
              <a className="btn btn-dark btn-lg mt-2"
                rel='noreferrer'
                href="https://drive.google.com/file/d/1a71244TpvgFHgub9G5_ot4hh_Evt6e-q/view?usp=sharing"
                target="_blank">CV</a>
              &nbsp;
              &nbsp;

              <a className="btn btn-dark btn-lg mt-2 pl-5 ml-5" href="https://github.com/julioPicazo06" target="_blank"
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            </p>

          </div>
          <br />
         
    </>
  )
}

export default About