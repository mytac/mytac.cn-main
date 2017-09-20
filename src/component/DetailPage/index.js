import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router';

import Header from '../../component/Header';
import Poster from './Poster';
import Articles from './Articles';

import './style.less';

// TODO: Header的背景图片为主内容中的图片，把props中的删了
export default function DetailPage({ id, imgUrl }) {
  return (
    <div>
      <Header img={imgUrl[0]} />
      <div className="detail-page">
        <Poster imgUrl={imgUrl[1]} />
        <Articles />
              DetailPage:{id}
      </div>
    </div>

  );
}

DetailPage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
