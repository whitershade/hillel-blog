import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './styles.css';


const Post = ({ _id, title, text, canEdit, deletePost }) => (
  <div className="post-wrapper">
    <Link className="post" to={ `/posts/${ _id }` }>
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
