import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import NavbarHeading from '../NavbarHeading';

interface IUser {
  username: string;
  email: string;
  password: string;
  designation: string;
  gender: string;
  bio: string;
  terms: boolean;
}

const RegisterUserFormik: React.FC = () => {
  const initialValues: IUser = {
    username: '',
    email: '',
    password: '',
    designation: '',
    gender: '',
    bio: '',
    terms: false,
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    designation: Yup.string().required('Designation is required'),
    gender: Yup.string().required('Gender is required'),
    bio: Yup.string().required('Bio is required'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });

  const handleSubmit = (values: IUser) => {
    console.log(values); // send user to server
    alert(JSON.stringify(values));
  };

  return (
    <>
      <NavbarHeading navbarName="React Registration Form with 'React-Formik-Library'  Validation  " />
      
      <div className="card p-5">
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-4">
              <div className="card shadow-lg">
                <div className="card-header bg-primary text-white">
                  <p className="h3">Registration</p>
                </div>
                <div className="card-body bg-light">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <div className="mb-2">
                        <Field
                          type="text"
                          name="username"
                          className="form-control"
                          placeholder="Username"
                        />
                        <ErrorMessage name="username" component="div" className="text-danger" />
                      </div>
                      <div className="mb-2">
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                        />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                      </div>
                      {/* Other fields */}
                      <div className="mb-2">
                        <Field as="select" name="designation" className="form-control">
                          <option value="">Select Designation</option>
                          <option value="Software Engineer">Software Engineer</option>
                          <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                          <option value="Tech Lead">Tech Lead</option>
                          <option value="Manager">Manager</option>
                        </Field>
                        <ErrorMessage name="designation" component="div" className="text-danger" />
                      </div>
                      {/* Gender radio buttons */}
                      <div className="mb-2">
          <label className="form-check-label px-1">Select Gender</label>
          <div role="group" aria-label="gender" className='px-3'>
            <label className='p-2'>
              <Field type="radio" name="gender" value="Male" className="form-check-input p-2" />
              Male
            </label>
            <label className='p-2'>
              <Field type="radio" name="gender" value="Female" className="form-check-input p-2" />
              Female
            </label>
            {/* You can add more options here */}
          </div>
          
          <ErrorMessage name="gender" component="div" className="text-danger" />
        </div>
                      {/* Bio textarea */}
        <div className="mb-2">
          
          <Field
            as="textarea"
            name="bio"
            className="form-control"
            rows={3}
            placeholder="Bio"
          />
          <ErrorMessage name="bio" component="div" className="text-danger" />
        </div>
                      <div className="mb-2">
                        <Field type="checkbox" name="terms" className="form-check-input" />
                        <label className="form-check-label px-3">Accepts Terms & Conditions</label>
                        <ErrorMessage name="terms" component="div" className="text-danger" />
                      </div>
                      <div className="mb-2">
                        <button type="submit" className="btn btn-primary" >
                          Register
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUserFormik;

