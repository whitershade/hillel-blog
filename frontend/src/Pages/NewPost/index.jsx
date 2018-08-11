import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Form, Field } from 'react-final-form';
import ReactHtmlParser from 'react-html-parser';
import PageHeader from '../../Components/PageHeader';
import PageWrapper from '../../Decorators/PageWrapper';
import './styles.css';


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
        <PageHeader>
          { isEmpty(initialValues) ? 'Add post' : 'Edit post' }
        </PageHeader>
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
                    <textarea {...input} rows="5" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                    { input.value ? (
                      <React.Fragment>
                        <p>It is how your post will look like:</p>
                        <div className="preview">
                          { ReactHtmlParser(input.value) }
                        </div>
                      </React.Fragment>
                    ) : null }
                  </div>
                )}
              </Field>

              <button type="submit" disabled={pristine || invalid}>
                Submit
              </button>
            </form>
          )}
        />
        <br />
        <Form
          onSubmit={this.onImageFormSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit} className="form">
              <Field name="image">
                {({ input, meta }) => (
                  <div>
                    <label>Pleas, upload file to use it in post text:</label>
                    <input id="file" type="file" {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>

              <button type="submit" disabled={pristine || invalid}>
                Upload file
              </button>
            </form>
          )}
        />

        { this.state.image ? (
          <div className="file-to-copy">
            <p>Please, copy and paste next code into post text to use this image: </p>
            <code>{ `<img src=${ this.state.image } />` }</code>
            <img src={ this.state.image } />
          </div>
        ) : null }
      </div>
    );
  }
}


export default PageWrapper(PostForm);
