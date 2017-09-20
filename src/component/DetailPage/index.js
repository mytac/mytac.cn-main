import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router';

import Header from '../../component/Header';
import Poster from './Poster';
// TODO: Header的背景图片为主内容中的图片，把props中的删了
export default function DetailPage({ id, imgUrl }) {
  return (
    <div>
      <Header img={imgUrl[0]} />
      <Poster imgUrl={imgUrl[1]} />
      DetailPage:{id}
    </div>
  );
}

DetailPage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
