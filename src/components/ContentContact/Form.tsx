
import { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAlertMessage, getFormData } from 'data/formData';
import emailjs from 'emailjs-com';
import useLocalStorage from 'hooks/useLocalStorage';

interface formData {

  pageTitle: string;
  title: string;
  name: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  button: string;
  success: string;
  img: string;
}


const Form = ({ formContent }: { formContent: formData }) => {


  const [success, setsuccess] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  // const { param:lang } = useParams<{param: string}>();
  const [lang] = useLocalStorage<string>('lang');

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required(getAlertMessage(lang).name),
      lastName: Yup.string().required(getAlertMessage(lang).lastName),
      email: Yup.string().email(getAlertMessage(lang).emailInvalid).required(getAlertMessage(lang).email),
      subject: Yup.string().required(getAlertMessage(lang).subject),
      message: Yup.string().required(getAlertMessage(lang).message)
    }),
    onSubmit: values => {
      setLoader(true);

      sendEmail({ ...values });

      formik.resetForm();
    }
  });

  const sendEmail = ({ ...values }) => {
    const templateParams = {
      lastName: values.lastName,
      email: values.email,
      name: values.name,
      subject: values.subject,
      message: values.message
    };

    emailjs.send('service_wb6kmcb', 'template_8feakmf', templateParams, 'ST0h3lqQUy-da7Y-j')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setsuccess(response.text);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
        setLoader(false);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };


  console.log('formContent', formContent);


  return (
    <div className="row">
      <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5 mouse'>
        {
          showAlert && success === 'OK' ? <div className="alert alert-success" role="alert">
            {getFormData(lang).success}
          </div> : null
        }
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <legend> {formContent.title}</legend>
            <div className='row'>
              <div className='col-mb-3 col-lg-6'>
                <label htmlFor='name' className='form-label'>
                  {formContent.name}
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
                  {formContent.lastName}
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
                  {formContent.email}
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
                  {formContent.subject}
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
                {formContent.message}
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
            <button type='submit' className='btn btn-dark btn-lg ' disabled={!(formik.isValid && formik.dirty)}>
              {formContent.button}
              {
                loader && (<div className="spinner-border text-light " role="status" />)
              }
            </button>
          </fieldset>
        </form>
      </div>
      <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 flex justificar centrar column '>
        <img className="img-fluid" src={formContent.img} alt='contactoImg' />
      </div>

    </div>
  )
}

export default Form