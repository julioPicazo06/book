import { FC, useState } from 'react'


import {  PropsContent } from './types'
import { Content } from 'components/StylesComponents/ContentStyles'
import { contentWeb } from 'data/content'
import { imgContentWeb } from 'data/types'


const ContenidoProyectos: FC<PropsContent> = ({
  handleClose
}: PropsContent): JSX.Element => {

  const [modalContentido, setmodalContentido] = useState({
    descripcion : '',
    img :[] ,
    imgProyecto : {
      img : ''
    },
    nombre : '',
    cliente : '',
    tecnica : '',
    liga : ''
  })


  const handleThumbnail = (src:string)=> {
    setmodalContentido({
      ...modalContentido ,
      imgProyecto : {
        img : src
      }
    });
  }

  const handleClick = (
                        descripcion: string , 
                        img:[] , 
                        imgProyecto:any , 
                        nombre:string,
                        cliente:string,
                        tecnica:string,
                        liga:string = ''
                        )=> {
                          setmodalContentido({
                            ...modalContentido,
                            descripcion,
                            img,
                            imgProyecto,
                            nombre,
                            cliente,
                            tecnica,
                            liga
                          })
                      }
  return (
    <Content color={'#7BE495'}>
      <div id='' className='  mouse row flex column end'>
        <div className=''>
          <div className='col-xs-1-12 cursor ' data-text='frontEnd'>
            <div
              className='cursor flex column end mt-3 pr-6 roboto f-30 bold '
              style={{
                paddingRight: '20px'
              }}
              data-text='frontEnd'
              onClick={e => handleClose(e)}
            >
              X
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <h1 className='mouse'> Proyectos Front-End</h1>
        </div>
        <div className='row mouse'>
        <p className="pt-3 pb-3">
        Un poco de código con React como Librería de desarrollo combinando con Sass para lograr un código cada vez más óptimo.

          </p>
        </div>
        <div className=' items flex rowS flexStart'>
        {
          contentWeb.map((item:imgContentWeb)=> (
            <div
            className='item-img pr-5 cursor flex column'
            style={{
              marginRight: '14px'
            }}
            data-bs-toggle='modal'
            onClick={e=>handleClick(
                      item.descripcion , 
                      item.img as [] , 
                      item.imgProyecto , 
                      item.nombre ,
                      item.cliente,
                      item.tecnica,
                      item.liga
                      )}
            data-bs-target='#exampleModal'
          >
            <img className='mr-5' src={item.imgProyecto.img} alt='img' />
            <span className='proyectoNombre mouse pl-5 f-18 pt-2 flex column centrar'>
              <p>{item.cliente}</p>
            </span>
          </div>
          ))
        }
          
    
        </div>
      </div>

      <div>
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-lg'>
            <div className='modal-content colorFondo'>
              <div className='modal-header'>
                <h3 className='modal-title mouse letraCapital' id='exampleModalLabel'>
                  {modalContentido.nombre}
                </h3>
                &nbsp;&nbsp;
                {
                     modalContentido.liga!=='' ? (
                       <a className="btn btn-danger ml-5 pl-4" 
                          href={modalContentido.liga} 
                          rel='noreferrer'
                          target="_blank">Ir al Proyecto</a>
                     ):null 
                   }
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body'>
                <div className=''>
                  <img className='imagenPrincipal' 
                        src={modalContentido.imgProyecto.img }
                        alt='imagenPrincipal' />
                </div>
                <div className='thumbmail-container'>
                  {
                    modalContentido.img.map((item:{src:string})=> (
                      <img src={item.src} 
                          key={item.src} 
                          className='thumbmail'
                           onClick={()=>handleThumbnail(item.src)} 
                           alt='item'
                           />

                    ))
                  }
                </div>
                <p className='mouse f-18'>
                  Cliente : {modalContentido.cliente} <br />
                  Técnica : {modalContentido.tecnica}
                  <br />
                  Descripción : {modalContentido.descripcion} <br/>
                  
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  )
}

export default ContenidoProyectos
