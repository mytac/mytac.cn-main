import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function Header({ title }) {
  return (
    <div className="Header">
      <div className="text-wrapper">
        <h2>{title}</h2>
        <p className="footer-text">September 26,2017</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
