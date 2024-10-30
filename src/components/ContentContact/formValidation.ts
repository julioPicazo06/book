import * as Yup from 'yup';

export const validationSchema = Yup.object()


export const validations = {
    name: Yup.string().required('El nombre  es requerido'),
    lastName: Yup.string().required('El apellido es requerido'),
    email: Yup.string().email('Email inválido').required('Email es requerido'),
    subject: Yup.string().required('Asunto es requerido'),
    message: Yup.string().required('message es requerido')
  }