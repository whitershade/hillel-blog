import React, { Component } from 'react';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import PageWrapper from '../../Decorators/PageWrapper';
import PageHeader from '../../Components/PageHeader';
import Post from './Post';
import './styles.css';


class Posts extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { posts = [], currentUserId, deletePost } = this.props;

    return (
      <div className="page">
        <PageHeader>Posts <Link to='/posts/new'>Create new Post</Link></PageHeader>
        <div className="posts">
          { map(posts, (post, index) =>
            <Post
              key={ index }
              { ...post }
              deletePost={ deletePost }
              canEdit={ post.addedBy._id === currentUserId }
              />) }
        </div>
      </div>
    );
  }

}

export default PageWrapper(Posts);
