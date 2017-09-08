import React from 'react';
import { render } from 'react-dom';

import 'semantic-ui-css/semantic.min.css';

import './reset.less';
import './style.less';

import Header from './component/Header';

render(
  <div>
    <Header />
  </div>,
  document.getElementById('root'),
);
