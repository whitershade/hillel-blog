import React from 'react';
import { Form, Field } from "react-final-form";
import PageHeader from '../../Components/PageHeader';
import PageWrapper from '../../Decorators/PageWrapper';


const LoginPage = ({ onSubmit }) => (
  <div className="form-page">
    <PageHeader>Add Post</PageHeader>
    
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label>Title</label>
            <Field name="title" component="input" />
          </div>

          <Field name="text">
            {({ input, meta }) => (
              <div>
                <label>Text</label>
                <textarea {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <button type="submit" disabled={pristine || invalid}>
            Submit
          </button>
        </form>
      )}
    />
  </div>
)


export default PageWrapper(LoginPage);
