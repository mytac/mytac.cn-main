import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function Title({ title }) {
  return (
    <div className="title"><span>{title}</span></div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
