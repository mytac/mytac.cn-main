import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function Poster({ imgUrl }) {
  return (
    <div className="poster">
      <img src={imgUrl} alt="" />
    </div>
  );
}

Poster.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
