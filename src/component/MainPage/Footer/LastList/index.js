import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

import Title from '../../../Title';
import ListItem from './ListItem';

export default function LastList({ imgArray }) {
  const renderList = imgArray.length > 3 ? imgArray.slice(0, 3) : imgArray;
  return (
    <div className="last-list">
      <Title title="LASTED" />
      <div className="item-wrapper">
        {renderList.map(img => <ListItem imgUrl={img} key={img} />)}
      </div>
    </div>
  );
}

LastList.propTypes = {
  imgArray: PropTypes.array.isRequired,
};
