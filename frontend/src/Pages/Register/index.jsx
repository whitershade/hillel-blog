import React from 'react';
import { isEmpty } from 'lodash';
import { Form, Field } from 'react-final-form';
import PageHeader from '../../Components/PageHeader';
import PageWrapper from '../../Decorators/PageWrapper';


const RegisterPage = ({ onSubmit, initialValues }) => (
  <div className="form-page">
    <PageHeader>
      { isEmpty(initialValues) ? 'Register' : 'Edit Profile' }
    </PageHeader>
    <Form
      className="form"
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label>
              Email
            </label>
            <Field name="email" component="input" />
          </div>

          { isEmpty(initialValues) ? (
            <Field name="password">
              {({ input, meta }) => (
                <div>
                  <label>
                    Password
                  </label>
                  <input type="password" {...input} />
                  {meta.touched && meta.error && (
                  <span>
                    {meta.error}
                  </span>
                  )}
                </div>
              )}
            </Field>
          ) : null }

          <div>
            <label>
              Name
            </label>
            <Field name="name" component="input" />
          </div>

          <button type="submit" disabled={pristine || invalid}>
            Submit
          </button>
        </form>
      )}
    />
  </div>
);


export default PageWrapper(RegisterPage);
