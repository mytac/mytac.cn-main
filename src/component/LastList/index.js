import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

import Title from '../Title';
import ListItem from './ListItem';

export default function LastList({ imgArray }) {
  return (
    <div className="last-list">
      <Title title="LASTED" />
      <div className="item-wrapper">
        {imgArray.map(img => <ListItem imgUrl={img} />)}
      </div>
    </div>
  );
}

LastList.propTypes = {
  imgArray: PropTypes.string.isRequired,
};
