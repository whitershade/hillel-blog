import React from 'react';
import moment from 'moment';
import './styles.css';


const CreatedAt = ({ createdAt }) => (
  <p className="created-at">
    { moment(createdAt).format('Do MMM of YYYY, h:mm') }
  </p>
);


export default CreatedAt;
