import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Form, Field } from 'react-final-form';

class CommentForm extends Component {
  render() {
    const { onSubmit, initialValues } = this.props;

    return (
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit} className="form">
            <Field name="text">
              {({ input, meta }) => (
                <React.Fragment>
                  <input type="text" {...input} placeholder="Comment text" />
                  {meta.touched && meta.error && (
                  <span>
                    {meta.error}
                  </span>
                  )}
                </React.Fragment>
              )}
            </Field>

            <button type="submit" disabled={pristine || invalid}>
              Add comment
            </button>
          </form>
        )}
      />
    );
  }
}


export default CommentForm;
