import React from 'react';
import {
  Link,
} from 'react-router';

import Header from '../../component/Header';
import Poster from './Poster';
// TODO: Header的背景图片为主内容中的图片，把props中的删了
export default function DetailPage({ id, imgArray }) {
  return (
    <div>
      <Header img={imgArray[0]} />
      <Poster imgUrl={imgArray[0]} />
      DetailPage:{id}
    </div>
  );
}
