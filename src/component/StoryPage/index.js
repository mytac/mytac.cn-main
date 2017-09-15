import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

export default function StoryPage({ title, img, content }) {
  return (
    <div className="story-page">
      <div className="title" >
        {title}
      </div>
      <div className="pic">
        <img src={img} alt="" />
      </div>
      <div className="content">
        {content}
      </div>
    </div>
  );
}

StoryPage.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
