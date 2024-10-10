import React, { FC, useState } from 'react'

import { imgenes, PropsIllustracion } from './types'
import { contentIllustration } from 'data/content'
import { Content } from 'components/StylesComponents/ContentStyles';



const ContenidoIllustracion:FC<PropsIllustracion> = ({handleClose}:PropsIllustracion):JSX.Element => {
    
  const [modalContentido, setmodalContentido] = useState({
    descripcion : '',
    img :[] ,
    imgProyecto : {
      img : ''
    },
    nombre : '',
    cliente : '',
    tecnica : ''
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
                        tecnica:string
                        )=> {
                          setmodalContentido({
                            ...modalContentido,
                            descripcion,
                            img,
                            imgProyecto,
                            nombre,
                            cliente,
                            tecnica
                          })
                      }
   

    return (
        <Content color={"#56C596"}>
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
          <h1 className='mouse letraCapital'> Proyectos Ilustración</h1>
        </div>
        <div className='row mouse'>
          <p className="pt-3 pb-3">
          Aquí está un poco de mi trabajo en diseño de personajes , algo que me ha gustado mucho a lo largo de los años, digitalizar bocetos y transformarlos en vectores.
          </p>
        </div>
        <div className=' items flex rowS flexStart'>
        {/* <Proyecto img={OryMago} titulo={'mago'}  /> */}
        {
          contentIllustration.map((item:imgenes)=> (
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
                      item.tecnica
                      )}
            data-bs-target='#modalIllustracion'
          >
            <img className='mr-5' src={item.imgProyecto.img} alt='imgProyecto' />
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
          id='modalIllustracion'
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content colorFondo'>
              <div className='modal-header'>
                <h3 className='modal-title mouse' id='exampleModalLabel'>
                  {modalContentido.nombre}
                </h3>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body'>
                <div className=''>
                  <img className='imagenPrincipal' src={modalContentido.imgProyecto.img } alt='imgProyecto' />
                </div>
                <div className='thumbmail-container'>
                  {
                    modalContentido.img.map((item:{src:string})=> (
                      <img src={item.src} key={item.src} className='thumbmail' onClick={()=>handleThumbnail(item.src)} alt='thumbmail' />

                    ))
                  }
                </div>
                <p className='mouse f-18'>
                  Cliente : {modalContentido.cliente} <br />
                  Técnica : {modalContentido.tecnica}
                  <br />
                  Descripción : {modalContentido.descripcion}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
    )
}

export default ContenidoIllustracion
