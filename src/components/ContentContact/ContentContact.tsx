import React, { FC } from 'react';
import { Content } from 'components/StylesComponents/ContentStyles';
import Form from './Form';
import CloseButton from 'components/closeButton';

interface PropsContent {
  handleClose: Function;
}

const ContenidoContact: FC<PropsContent> = ({ handleClose }: PropsContent): JSX.Element => {

  return (
    <Content color={'#56C596'}>


      <CloseButton dataText='yo' handleClose={(e: React.MouseEvent<Element, MouseEvent>) => handleClose(e)} />

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