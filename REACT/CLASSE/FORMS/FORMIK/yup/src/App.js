import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const App = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <Form>
    <div>
      { touched.email && errors.email && <p>{errors.email}</p> }
      <Field type="email" name="email" placeholder="Email"/>
    </div>
    <div>
      { touched.password && errors.password && <p>{errors.password}</p> }
      <Field type="password" name="password" placeholder="Password"/>
    </div>
    <label>
      <Field type="checkbox" name="newsletter" checked={values.newsletter}/>
      Subscriu-te al blog:
    </label>
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <button disabled={isSubmitting}>Submit</button>
  </Form>
)

export default App;

