import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Form, Field } from 'react-final-form';
import PageHeader from '../../Components/PageHeader';
import PageWrapper from '../../Decorators/PageWrapper';


class PostForm extends Component {
  state = { image: '' }

  componentDidMount() {
    this.props.loadData && this.props.loadData();
  }

  onImageFormSubmit = (values) => {
    this.props.createImage(values)
      .then((image) => this.setState({ image }));
  }

  render() {
    const { onPostFormSubmit, createImage, initialValues } = this.props;

    return (
      <div className="form-page">
        <PageHeader>Add Post</PageHeader>
        <Form
          onSubmit={onPostFormSubmit}
          initialValues={initialValues}
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

        <Form
          onSubmit={this.onImageFormSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit} className="form">
              <Field name="image">
                {({ input, meta }) => (
                  <div>
                    <label>Text</label>
                    <input id="file" type="file" {...input} />
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

        { this.state.image ? `<img src=${ this.state.image } />` : '' }
      </div>
    );
  }
}


export default PageWrapper(PostForm);
