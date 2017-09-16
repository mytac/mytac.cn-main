import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

const tempContext = 'Milk the cow kitty scratches couch bad kitty. Chase red laser dot please stop looking at your phone and pet me. I could pee on this if i had the energy sun bathe eat the fat cats food. Knock dish off table head butt cant eat out of my own dish. Eat all the power..';
export default function LittlePage({ img, title, content, date }) {
  return (
    <div className="little-page">
      <div className="pic" style={{ backgroundImage: `url(${img})` }} />
      <div className="content">
        <div className="rm-btn-square" />
        <header>
          <h2 className="date">{date || 'April 20th,2017'}</h2>
          <p className="title">{title || 'This is title'}</p>
        </header>
        <p className="context">{content || tempContext}</p>
        <footer>
          <a className="more-link" >READ MORE</a>
        </footer>
      </div>
    </div>
  );
}

LittlePage.propTypes = {
  img: PropTypes.string.isRequired,
};
