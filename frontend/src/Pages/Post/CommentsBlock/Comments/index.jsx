import React from 'react';
import { isEmpty } from 'lodash';

const Comments = ({ comments }) => (
  <div className="comments">
    { isEmpty(comments) ? (
      <div>
        No comments yet
      </div>
    ) : (
      <ul>
        { comments.map(({ _id, addedBy, text }) => (
          <li key={_id}>
            { text }
          </li>
        )) }
      </ul>
    )}
  </div>
);

export default Comments;
