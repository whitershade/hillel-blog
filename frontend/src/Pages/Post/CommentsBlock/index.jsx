import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from '../../../Containers/NewComment';
import './styles.css';

class CommentsBlock extends Component {
  render() {
    const { comments = [], postId, isAuthenticated } = this.props;

    return (
      <div className="comments-block">
        <h3 className="comments-title">
          Comments
        </h3>
        { isAuthenticated ? (
          <NewComment postId={postId} />
        ) : (
          <div className="login-to-leave-comments">
            Please, login to leave comments
          </div>
        ) }
        <Comments comments={comments} />
      </div>
    );
  }
}

export default CommentsBlock;
