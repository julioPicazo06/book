import React, { FC } from 'react'
import { Content } from 'components/StylesComponents/ContentStyles'
import { contactoImg } from 'utils/img'
interface PropsContent {
  handleClose: Function
}

const ContenidoContact: FC<PropsContent> = ({
  handleClose
}: PropsContent): JSX.Element => {
  return (
    <Content color={'#56C596'}>
      <div id='' className='  mouse row flex column end'>
        <div className=''>
          <div className='col-xs-1-12 cursor ' data-text='yo'>
            <div
              className='cursor flex column end mt-3 pr-6 roboto f-30 bold '
              style={{
                paddingRight: '20px'
              }}
              data-text='yo'
              onClick={e => handleClose(e)}
            >
              X
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <h1 className='mouse '> Contacto</h1>
        </div>

        <div className="row">
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 mouse'>
          <form>
            <fieldset >
              <legend>Mantengamos contacto</legend>
              <div className='mb-3'>
                <label htmlFor='disabledTextInput' className='form-label'>
                  Nombre
                </label>
                <input
                  type='text'
                  id='disabledTextInput'
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='disabledTextInput' className='form-label'>
                  Email
                </label>
                <input
                  type='text'
                  id='disabledTextInput'
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='disabledTextInput' className='form-label'>
                  Asunto
                </label>
                <input
                  type='text'
                  id='disabledTextInput'
                  className='form-control'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='disabledTextInput' className='form-label'>
                  Mensaje
                </label>
                <textarea
                style={{
                    height: '100px'
                }}
                  id='disabledTextInput'
                  className='form-control'
                />
              </div>
     
              <button  className='btn btn-primary btn-lg'>
                Enviar
              </button>
            </fieldset>
          </form>
        </div>
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 flex justificar centrar column'>
              <img className="img-fluid" src={contactoImg} alt='contactoImg'/>
        </div>
        </div>
      </div>
    </Content>
  )
}

export default ContenidoContact
