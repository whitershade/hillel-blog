import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './styles.css';

const Post = ({ _id, title, text }) => (
  <Link to={ `/posts/${ _id }` } className="post">
    <h2>{ title }</h2>
    <p>{ ReactHtmlParser(text) }</p>
  </Link>
);

export default Post;
