import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { userRegisterAction } from '../Redux/Actions/userAction';
import { useNavigate } from 'react-router-dom';
import { UserValidation } from './ValidationSchema';

const RegisterUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(userRegisterAction(values));
    navigate('/userProfile');
  };

  return (
    <>
      <div className='app'>
        <Formik
          initialValues={{
            image: '',
            name: '',
            email: '',
            phoneNo: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={UserValidation}
          onSubmit={(fields) => {
            const data = {
              image: URL.createObjectURL(fields.image),
              name: fields.name,
              phoneNo: fields.phoneNo,
              email: fields.email,
              password: fields.password,
            };
            handleSubmit(data);
          }}
          render={({ errors, touched, setFieldValue }) => (
            <Form>
              <div className='form-group'>
                <label htmlFor='file'>File upload</label>
                <input
                  name='image'
                  type='file'
                  accept='image/*'
                  onChange={(e) => {
                    setFieldValue('image', e.currentTarget.files[0]);
                  }}
                  className={
                    'form-control' +
                    (errors.image && touched.image ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name='image'
                  component='div'
                  className='invalid-feedback'
                />

                <label htmlFor='firstName'>Name</label>
                <Field
                  name='name'
                  type='text'
                  className={
                    'form-control' +
                    (errors.name && touched.name ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name='name'
                  component='div'
                  className='invalid-feedback'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <Field
                  name='email'
                  type='text'
                  className={
                    'form-control' +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='invalid-feedback'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='phoneNo'>Phone</label>
                <Field
                  name='phoneNo'
                  type='text'
                  className={
                    'form-control' +
                    (errors.phoneNo && touched.phoneNo ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name='phoneNo'
                  component='div'
                  className='invalid-feedback'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <Field
                  name='password'
                  type='password'
                  className={
                    'form-control' +
                    (errors.password && touched.password ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='invalid-feedback'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <Field
                  name='confirmPassword'
                  type='password'
                  className={
                    'form-control' +
                    (errors.confirmPassword && touched.confirmPassword
                      ? ' is-invalid'
                      : '')
                  }
                />
                <ErrorMessage
                  name='confirmPassword'
                  component='div'
                  className='invalid-feedback'
                />
              </div>
              <div className='form-group'>
                <button type='submit' className='btn btn-primary mr-2'>
                  Register
                </button>
                <button type='reset' className='btn btn-secondary'>
                  Reset
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    </>
  );
};

export default RegisterUser;
