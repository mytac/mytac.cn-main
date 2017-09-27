import React from 'react';
import PropTypes from 'prop-types';
import { ReadMoreBtn } from '../../Common';
import './style.less';

export default function StoryPage({ title, img, content }) {
  return (
    <div className="story-page">
      <div className="title-wrapper" >
        <p className="title">{title}</p>
        <p className="date">April 26,2017</p>
      </div>
      <div className="pic">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <p>{content}</p>
        <p><ReadMoreBtn text="read more" /></p>
      </div>
    </div>
  );
}

StoryPage.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
