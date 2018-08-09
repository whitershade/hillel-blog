import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Form, Field } from "react-final-form";

class CommentForm extends Component {
  render() {
    const { onSubmit, initialValues } = this.props;

    return (
      <Form
        onSubmit={onSubmit}
        initialValues={ initialValues }
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit} className="form">
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
    );
  }
}


export default CommentForm;
