
import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import contactoImg from 'img/3.png';


const Form = () => {
    const [emailContetent, setEmailContetent] = useState({
        name: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    })

    const formik = useFormik({
        initialValues: {
          name: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        },
        validationSchema: Yup.object({
          name: Yup.string().required('El nombre  es requerido'),
          lastName: Yup.string().required('El apellido es requerido'),
          email: Yup.string().email('Email inválido').required('Email es requerido'),
          subject: Yup.string().required('Asunto es requerido'),
          message: Yup.string().required('message es requerido')
        }),
        onSubmit: values => {
            setEmailContetent({
                ...values
            })
        }
      });

  return (
    <div className="row">
          <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5 mouse'>
            <form onSubmit={formik.handleSubmit}>
              <fieldset>
                <legend>Mantengamos contacto</legend>
                <div className='row'>
                <div className='col-mb-3 col-lg-6'>
                  <label htmlFor='name' className='form-label'>
                    Nombre
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='form-control'
                    {...formik.getFieldProps('name')}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className='text-danger'>{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className='col-mb-3 col-lg-6'>
                  <label htmlFor='name' className='form-label'>
                    Apellido
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='form-control'
                    {...formik.getFieldProps('lastName')}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className='text-danger'>{formik.errors.lastName}</div>
                  ) : null}
                </div>
                  
                </div>

                <div className="row">
                <div className='col-mb-3 col-lg-6'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='form-control'
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className='text-danger'>{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className='col-mb-3 col-lg-6'>
                  <label htmlFor='subject' className='form-label'>
                    Asunto
                  </label>
                  <input
                    type='text'
                    id='subject'
                    className='form-control'
                    {...formik.getFieldProps('subject')}
                  />
                  {formik.touched.subject && formik.errors.subject ? (
                    <div className='text-danger'>{formik.errors.subject}</div>
                  ) : null}
                </div>
                </div>
                <div className='mb-3 lg-6'>
                  <label htmlFor='message' className='form-label'>
                    message
                  </label>
                  <textarea
                    id='message'
                    className='form-control'
                    style={{ height: '100px' }}
                    {...formik.getFieldProps('message')}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className='text-danger'>{formik.errors.message}</div>
                  ) : null}
                </div>
                <button type='submit' className='btn btn-primary btn-lg'>
                  Enviar
                </button>
              </fieldset>
            </form>
          </div>
          <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 flex justificar centrar column '>
            <img className="img-fluid" src={contactoImg} alt='contactoImg' />
          </div>
        </div>
  )
}

export default Form