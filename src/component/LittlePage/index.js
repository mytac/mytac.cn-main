import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

export default function LittlePage({ img, title, content, date }) {
  return (
    <div className="little-page">
      <div className="pic" style={{ backgroundImage: `url(${img})` }} />
      <div className="content">
          <div className="rm-btn-square" />
          <header>
          <p className="date">{date || 'April 20th,2017'}</p>
          <p className="title">{title || 'This is title'}</p>
        </header>
        <p>{content || 'content'}</p>
        <footer>
          <a className="more-link" >Read More</a>
        </footer>
      </div>
    </div>
  );
}

LittlePage.propTypes = {
  img: PropTypes.string.isRequired,
};
