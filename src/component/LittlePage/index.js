import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default function LittlePage({ img }) {
  return (
    <div className="little-page">
      <div className="pic">
        <img src={img} alt="" />
      </div>
      <div className="rm-btn" />
      <div className="content" />
    </div>
  );
}

LittlePage.propTypes = {
  img: PropTypes.string.isRequired,
};
