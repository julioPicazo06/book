import { FC, useEffect, useState } from 'react'
import { PropsContent } from './types'
import { Content } from 'components/StylesComponents/ContentStyles'
import { galleryStaticText, getWebContent } from 'data/content'
import { imgContentWeb } from 'data/types'
import CloseButton from 'components/closeButton'
import { setContentWeb } from 'store/reducers/contentWebSlice'
import { endpoints } from 'utils/endpoints'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAndDispatch } from 'utils/fetchAndDispatch'
import { RootState } from 'store/store'
import useLocalStorage from 'hooks/useLocalStorage'


const ContenidoProyectos: FC<PropsContent> = ({
  handleClose
}: PropsContent): JSX.Element => {

  const dispatch = useDispatch()
  // const { param:lang } = useParams<{param: string}>()
  const [lang] = useLocalStorage<string>('lang')

  useEffect(() => {


    fetchAndDispatch({
      url: endpoints['contentWeb'],
      staticContent: getWebContent(lang) as any,
      action: setContentWeb,
      dispatch,
      flag: false,
      lenguage : lang
    })
  }, [lang, dispatch])

  const contentWeb = useSelector((state: RootState) => state.contentWeb)

  const [modalContentido, setmodalContentido] = useState({
    descripcion: '',
    img: [],
    imgProyecto: {
      img: ''
    },
    nombre: '',
    cliente: '',
    tecnica: '',
    liga: ''
  })


  const handleThumbnail = (src: string) => {
    setmodalContentido({
      ...modalContentido,
      imgProyecto: {
        img: src
      }
    });
  }

  const handleClick = (
    descripcion: string,
    img: [],
    imgProyecto: any,
    nombre: string,
    cliente: string,
    tecnica: string,
    liga: string = ''
  ) => {
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
    <Content color={'#7BE495'} >

      <CloseButton dataText='frontEnd' handleClose={(e: React.MouseEvent<Element, MouseEvent>) => handleClose(e)} />



<div className='content-container'>
      <div className='container'>
        <div className='row'>
          <h1 className='mouse'> {contentWeb.title}</h1>
        </div>
        <div className='row mouse'>
          <p className="pt-3 pb-3">
            {contentWeb.description}
          </p>
        </div>
        <div className=' items flex rowS flexStart'>
          {(contentWeb.img || []).map((item: imgContentWeb) => (
            <div
              className='item-img pr-5 cursor flex column'
              style={{
                marginRight: '14px'
              }}
              data-bs-toggle='modal'
              onClick={e => handleClick(
                item.descripcion,
                item.img as [],
                item.imgProyecto,
                item.nombre,
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
                  modalContentido.liga !== '' ? (
                    <a className="btn btn-danger ml-5 pl-4"
                      href={modalContentido.liga}
                      rel='noreferrer'
                      target="_blank">{galleryStaticText.title}</a>
                  ) : null
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
                    src={modalContentido.imgProyecto.img}
                    alt='imagenPrincipal' />
                </div>
                <div className='thumbmail-container'>
                  {
                    modalContentido.img.map((item: { src: string }) => (
                      <img src={item.src}
                        key={item.src}
                        className='thumbmail'
                        onClick={() => handleThumbnail(item.src)}
                        alt='item'
                      />

                    ))
                  }
                </div>
                <p className='mouse f-18'>
                  {`${galleryStaticText.Client} : ${modalContentido.cliente}`} <br />
                  {`${galleryStaticText.Tecnic} : ${modalContentido.tecnica} `}
                  <br />
                  {`${galleryStaticText.Description} : ${modalContentido.descripcion}`} <br />

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
