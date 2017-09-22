import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function ListItem({ imgUrl, title, date }) {
  return (
    <div className="list-item">
      <img src={imgUrl} alt="" />
      <div className="description">
        <h4>{title || 'This is title'}</h4>
        <p>{date || 'April 23th 2017'}</p>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
};
