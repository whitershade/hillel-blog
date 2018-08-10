import React, { Component } from 'react';
import Comments from './Comments';
import NewComment from '../../../Containers/NewComment';

class CommentsBlock extends Component {
  render() {
    const { comments = [], postId, isAuthenticated } = this.props;

    return (
      <div className="comments-block">
        <h3>
          Comments
        </h3>
        { isAuthenticated ? (
          <NewComment postId={postId} />
        ) : (
          <div>
            Please, login to leave comments
          </div>
        ) }
        <Comments comments={comments} />
      </div>
    );
  }
}

export default CommentsBlock;
