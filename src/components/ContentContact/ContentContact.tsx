import React, { FC, useEffect } from 'react';
import { Content } from 'components/StylesComponents/ContentStyles';
import Form from './Form';
import CloseButton from 'components/closeButton';
import { getFormData } from 'data/formData';
import { fetchAndDispatch } from 'utils/fetchAndDispatch';
import { endpoints } from 'utils/endpoints';
import { useSelector, useDispatch} from 'react-redux';
import useLocalStorage from 'hooks/useLocalStorage';
import { setForm } from 'store/reducers/formSlice';
import { RootState } from 'store/store';

interface PropsContent {
  handleClose: Function;
}

const ContenidoContact: FC<PropsContent> = ({ handleClose }: PropsContent): JSX.Element => {

  const dispatch = useDispatch();

  const [lang] = useLocalStorage<string>('lang');

  useEffect(() => {
    fetchAndDispatch({
      url : endpoints['form'] ,
      staticContent: getFormData(lang),
      action: setForm,
      dispatch,
      flag: false,
      lenguage: lang
    });
  }, [lang, dispatch]);

  const formContent = useSelector((state: RootState) => state.form);


  return (
    <Content color={'#56C596'}>


      <CloseButton dataText='yo' handleClose={(e: React.MouseEvent<Element, MouseEvent>) => handleClose(e)} />

      <div className='container'>
        <div className='row'>
          <h1 className='mouse '>{getFormData(lang).pageTitle}</h1>
        </div>

        <Form formContent={formContent} />
      </div>
    </Content>
  );
};

export default ContenidoContact;