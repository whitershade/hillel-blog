import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Post = ({ _id, title, text }) => (
  <Link to={ `/posts/${ _id }` } className="post">
    <h2>{ title }</h2>
    <p>{ text }</p>
  </Link>
);

export default Post;
