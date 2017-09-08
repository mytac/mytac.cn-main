import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import 'semantic-ui-css/semantic.min.css';

import './reset.less';
import './style.less';

import Header from './component/Header';

const store = createStore(
  reducers,
);

const action = type => store.dispatch({ type });

render(
  <div>
    <Header data={store.getState()} />
  </div>,
  document.getElementById('root'),
);
