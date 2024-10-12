import React, { FC } from 'react';
import { Content } from 'components/StylesComponents/ContentStyles';
import Form from './Form';

interface PropsContent {
  handleClose: Function;
}

const ContenidoContact: FC<PropsContent> = ({ handleClose }: PropsContent): JSX.Element => {

  return (
    <Content color={'#56C596'}>
      <div id='' className='mouse row flex column end'>
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
          <h1 className='mouse '>Contacto</h1>
        </div>

        <Form />
      </div>
    </Content>
  );
};

export default ContenidoContact;