import React from 'react'
import App from './App';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormikApp = withFormik({
  
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || 'free'
    }
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email no vàlid').required('Email és obligatori'),
    password: Yup.string().min(9, 'Password ha de contenir al menys 9 caracters o més').required('Password és obligatori')
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if(values.email === 'meumail@iesmanacor.cat') {
        setErrors({ email: 'Aquest email ja està agafat!' })
      } else {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }
      setSubmitting(false)
    }, 2000)
  }

})(App);

export default FormikApp;