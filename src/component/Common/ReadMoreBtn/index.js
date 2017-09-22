import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function ReadMoreBtn({ text }) {
  return (
    <a className="rm-btn" >{text}</a>
  );
}
ReadMoreBtn.propTypes = {
  text: PropTypes.string.isRequired,
};
