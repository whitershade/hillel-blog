import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import CommentsBlock from './CommentsBlock';
import PageWrapper from '../../Decorators/PageWrapper';
import PageHeader from '../../Components/PageHeader';
import PostInformation from '../../Components/PostInformation';


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
        addedBy
      } = {},
      deletePost,
      canEdit,
      isAuthenticated
    } = this.props;

    return (
      <div className="page">
        <PageHeader>{ title }</PageHeader>
        <PostInformation createdAt={ createdAt } addedBy={ addedBy } />

        <div>{ ReactHtmlParser(text) }</div>

        {
          canEdit ? (
            <React.Fragment>
              <button onClick={ deletePost(_id) }>Delete Post</button>
              <Link to={ `/posts/${ _id }/edit` }>Edit Post</Link>
            </React.Fragment>
          ) : null
        }

        <CommentsBlock
          postId={ _id }
          comments={ comments }
          isAuthenticated={ isAuthenticated }
        />
      </div>
    );
  }
}


export default PageWrapper(Post);