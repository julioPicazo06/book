import { AboutData } from 'data/aboutData';
import React from 'react';

interface AboutProps {
  aboutData: AboutData;
}

const About = ({ aboutData }: AboutProps) => {
  // Validar que aboutData existe y tiene las propiedades necesarias
  if (!aboutData || !aboutData.title || !aboutData.text) {
    return (
      <div className='row'>
        <h1 className='mouse'>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
          <div className='row'>
            <h1 className='mouse '> {aboutData.title}</h1>
          </div>
          <div className='row mt-5'>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <img className="img-fluid acerca" src={aboutData.img} alt='gato' />
            </div>

            <p className='f-20 col-xs-12 col-sm-12 col-md-9 col-lg-9 semblansa'>
              {aboutData.text}
              <br />

              {aboutData.links && aboutData.links.length > 0 && 
                aboutData.links.map((link, index) => (
                 <>
                   <a key={index} className="btn btn-dark btn-lg mt-2"
                    rel='noreferrer'
                    href={link.url}
                    target="_blank">{link.title}</a>
                    &nbsp;
                    &nbsp;
                 </>
                ))
              }
         

              </p>

          </div>
          <br />
         
    </>
  )
}

export default About