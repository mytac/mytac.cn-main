import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function Header({ title }) {
  return (
    <div className="Header">
      <h2>{title}</h2>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
