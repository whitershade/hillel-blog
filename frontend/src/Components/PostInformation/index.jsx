import React from 'react';
import moment from 'moment';
import './styles.css';


const CreatedAt = ({ createdAt, addedBy: { email, name } = {} }) => (
  <div className="post-infomation">
    <p className="created-at">
      { moment(createdAt).format('Do MMM of YYYY, h:mm') }
    </p>
    <p className="added-by">
      by <b className="name">{ name || email }</b>
    </p>
  </div>
);


export default CreatedAt;
