import React, { Component } from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
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

        <div>{ ReactHtmlParser(text) }</div>

        {
          canEdit ? (
            <React.Fragment>
              <button onClick={ deletePost(_id) }>Delete Post</button>
              <Link to={ `/posts/${ _id }/edit` }>Edit Post</Link>
            </React.Fragment>
          ) : null
        }
      </div>
    );
  }
}


export default PageWrapper(Post);
