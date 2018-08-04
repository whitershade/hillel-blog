import React, { Component } from 'react';
import { map } from 'lodash';
import ReactHtmlParser from 'react-html-parser';
import PageWrapper from '../../Decorators/PageWrapper';
import PageHeader from '../../Components/PageHeader';


class Post extends Component {
  componentDidMount() {
    this.props.loadData(this.props.id);
  }

  render() {
    const { post: { _id, title, text } = {}, deletePost, canEdit } = this.props;

    return (
      <div className="page">
        <PageHeader>{ title }</PageHeader>

        <p>{ ReactHtmlParser(text) }</p>

        { canEdit ? <button onClick={ deletePost(_id) }>Delete Post</button> : null }
      </div>
    );
  }
}


export default PageWrapper(Post);
