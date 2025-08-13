import React, { FC, useEffect, useState } from 'react'

import { imgenes, PropsIllustracion } from './types'
import { getJobsTimeLineContent } from 'data/content'
import { Content } from 'components/StylesComponents/ContentStyles';
import CloseButton from 'components/closeButton';
import { fetchAndDispatch } from 'utils/fetchAndDispatch';
import { endpoints } from 'utils/endpoints';
import { setIllustration } from 'store/reducers/illustrationSlice';
import { useSelector, useDispatch} from 'react-redux';
import { RootState } from 'store/store';
import useLocalStorage from 'hooks/useLocalStorage';
import { isVisibleLanguage } from 'utils/utils';
import { logger } from 'utils/logger';




const ContenidoIllustracion:FC<PropsIllustracion> = ({handleClose}:PropsIllustracion):JSX.Element => {
  const dispatch = useDispatch();
  const [lang] = useLocalStorage<string>('lang');
  const contentIllustrationS = useSelector((state: RootState)=> state.illustration);

  useEffect(() => {
    logger.log('[ContentIllustration] useEffect ejecutado', lang);
    
    // Usar la misma lógica simple que funciona en ContentProyects
    isVisibleLanguage('illustration');
    
    fetchAndDispatch({
      url : endpoints['illustration'] ,
      staticContent: getJobsTimeLineContent(lang) as any,
      action: setIllustration,
      dispatch,
      flag: true,
      lenguage: lang
    });
  }, [lang, dispatch]);


interface Works {
  descripcion : string,
  img :[] ,
  imgProyecto : {
    img : string
  },
  nombre : string,
  cliente : string,
  tecnica : string
}


  const [modalContentido, setmodalContentido] = useState<Works>({
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


      <CloseButton dataText='frontEnd' handleClose={(e: React.MouseEvent<Element, MouseEvent>) => handleClose(e)} />
      
    <div className='content-container'>
    <div className='container'>
        <div className='row'>
          <h1 className='mouse letraCapital'> {contentIllustrationS.title}</h1>
        </div>
        <div className='row mouse'>
          <p className="pt-3 pb-3">
            {contentIllustrationS.description }
          </p>
        </div>
        <div className=' items flex rowS flexStart'>
        {Array.isArray(contentIllustrationS.img) &&
          contentIllustrationS.img.map((item:imgenes)=> (
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
            key={item.id}
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
