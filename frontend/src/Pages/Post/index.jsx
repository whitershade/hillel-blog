import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import CommentsBlock from './CommentsBlock';
import PageWrapper from '../../Decorators/PageWrapper';
import PageHeader from '../../Components/PageHeader';
import PostInformation from '../../Components/PostInformation';
import './styles.css';


class Post extends Component {
  componentDidMount() {
    this.props.loadData(this.props.id);
  }

  render() {
    const {
      post: {
        _id,
        title,
        text,
        comments,
        createdAt,
        addedBy,
        editable,
      } = {},
      deletePost,
      canEdit,
      isAuthenticated,
    } = this.props;

    return (
      <div className="page page__post">
        <div className="post-header">
          <PostInformation createdAt={createdAt} addedBy={addedBy} />
          {
            canEdit ? (
              <div className="post-actions">
                <button className="button__delete-post" onClick={deletePost(_id)}>
                  Delete Post
                </button>
                { editable ? (
                  <Link className="button__edit-post" to={`/posts/${_id}/edit`}>
                    Edit Post
                  </Link>
                ) : null }
              </div>
            ) : null
          }
        </div>

        <div className="post-body">
          <PageHeader>
            { title }
          </PageHeader>

          <div>
            { ReactHtmlParser(text) }
          </div>
        </div>

        <CommentsBlock
          postId={_id}
          comments={comments}
          isAuthenticated={isAuthenticated}
        />
      </div>
    );
  }
}


export default PageWrapper(Post);
