import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import PostInformation from '../../../Components/PostInformation';
import './styles.css';


const Post = ({
  _id,
  title,
  text,
  createdAt,
  addedBy,
  editable,
  canEdit,
  deletePost
}) => (
  <div className="post-wrapper">
    <Link className="post" to={ `/posts/${ _id }` }>
      <PostInformation createdAt={ createdAt } addedBy={ addedBy } />
      <h2>{ title }</h2>
      <div>{ ReactHtmlParser(text) }</div>
    </Link>

    { canEdit ? (
      <div className="post-actions">
        <button className='button__delete-post' onClick={ deletePost(_id) }>
          Delete Post
        </button>
        { editable ? (
          <Link className='button__edit-post' to={ `/posts/${ _id }/edit` }>
            Edit Post
          </Link>
        ) : null }
      </div>
    ) : null }
  </div>
);


export default Post;
