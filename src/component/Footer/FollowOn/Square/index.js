import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function SquareButton({ icon }) {
  return (
    <div className="square-button">
      <i className={icon} />
    </div>
  );
}

SquareButton.propTypes = {
  icon: PropTypes.string.isRequired,
};
