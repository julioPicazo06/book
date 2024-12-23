import React, { FC } from 'react';
import { Content } from '@/components/StylesComponents/ContentStyles';
import Form from './Form';
import CloseButton from '@/components/closeButton';
import { getFormData } from '@/data/formData';
import { useParams } from 'react-router-dom';

interface PropsContent {
  handleClose: Function;
}

const ContenidoContact: FC<PropsContent> = ({ handleClose }: PropsContent): JSX.Element => {

const {param:lang} = useParams<{param: string}>();
  
  return (
    <Content color={'#56C596'}>


      <CloseButton dataText='yo' handleClose={(e: React.MouseEvent<Element, MouseEvent>) => handleClose(e)} />

      <div className='container'>
        <div className='row'>
          <h1 className='mouse '>{getFormData(lang).pageTitle}</h1>
        </div>

        <Form />
      </div>
    </Content>
  );
};

export default ContenidoContact;