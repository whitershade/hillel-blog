import React from 'react';
import { isEmpty } from 'lodash';
import './styles.css';

const Comments = ({ comments }) => (
  <div className="comments">
    { isEmpty(comments) ? (
      <div className="no-comments">
        No comments yet
      </div>
    ) : (
      <ul className="comments-list">
        { comments.map(({ _id, addedBy: { name, email } = {}, text } = {}) => (
          <li key={_id}>
            <b>
              { name || email }
            </b>
            {' '}
            says:
            {' '}
            { text }
          </li>
        )) }
      </ul>
    )}
  </div>
);


export default Comments;
