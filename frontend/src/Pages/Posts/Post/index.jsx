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
        <button onClick={ deletePost(_id) }>delete</button>
        <Link to={ `/posts/${ _id }/edit` }>edit</Link>
      </div>
    ) : null }
  </div>
);


export default Post;
