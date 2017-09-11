import React from 'react';
import { render } from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import './reset.less';
import './style.less';

import Header from './component/Header';
import Gallery from './container/Gallery';

const tempPics = [
  'https://image.freepik.com/free-vector/pink-polygonal-background_23-2147495183.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5SBjyuQs-Xsiz5bqPpP7MZeEaFB7hQ3A56ZBre4O5bmozbHy',
  'https://i.pinimg.com/736x/3a/4d/69/3a4d693a3f2a7f49944a331e3bd207e6--kawaii-things-kawaii-stuff.jpg',
  'https://i.pinimg.com/736x/15/27/5d/15275d3b4b2c5696ffc6e54b6cbd968a--art-drawings-kawaii.jpg',
];

render(
  <div>
    <Header />
    <Gallery imgArray={tempPics} />
  </div>,
  document.getElementById('root'),
);
