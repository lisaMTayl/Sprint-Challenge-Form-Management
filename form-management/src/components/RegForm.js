import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import Recipes from './Recipes'
import * as Yup from 'yup';

const RegForm = ({ status, errors, touched, values, isSubmitting }) => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    if (status) {
      setUsers(users => [...users, status])
    }
  }, [status]);



  return (
    <div className="reg-form">
      <h1>Registration Form</h1>

      <Form>
        <div>
          <Field type="text" name="userName" placeholder="username" />
          {touched.userName && errors.userName && <p>{errors.userName}</p>}
        </div>

        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>

        <button type='submit' disabled={isSubmitting}>Submit!</button>
      </Form>

      {users.map(users => users.map(users => {
        return <Recipes key={users.name} data={users} >successfully registered!</Recipes>
        }

      ))}
    </div>
  );
};

// Higher Order Component - HOC
// Hard to share component / stateful logic (custom hooks)
// Function that takes in a component, extends some logic onto that component,
// returns a _new_ component (copy of the passed in component with the extended logic)
const FormikRegForm = withFormik({
  mapPropsToValues({ userName, password }) {
    return {
      userName: userName || '',
      password: password || ''
    }
  },

  validationSchema: Yup.object().shape({
    userName: Yup.string()
      .min(4, 'Your username must be 4 characters or longer')
      .required('You must type a username'),
    password: Yup.string()
      .min(8, 'Password must be 8 characters or longer')
      .required('Password is required'),
  }),

  handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
    axios
      .post(`http://localhost:5000/api/register/`, values)
      .then(res => {
        console.log(res.data);
        setStatus(res.data);
        resetForm();
        setSubmitting(false);
      })
      .catch(err =>  {
        console.log("Registration error: ", err);
        setSubmitting(false);
      });
    axios
      .get(`http://localhost:5000/api/restricted/data`, values)
      .then(res => {
        console.log(res.data);
        setStatus(res.data);
      })

  }


})(RegForm);

export default FormikRegForm;


