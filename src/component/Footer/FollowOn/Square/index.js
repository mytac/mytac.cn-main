import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function SquareButton({ icon, title }) {
  return (
    <a className="square-button" title={title}>
      <i className={icon} />
    </a>
  );
}

SquareButton.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
