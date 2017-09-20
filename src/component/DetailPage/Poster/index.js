import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function Poster({ imgUrl }) {
  return (
    <div className="poster" style={{ backgroundImage: `url(${imgUrl})` }} />
  );
}

Poster.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
