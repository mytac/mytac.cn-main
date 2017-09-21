import React from 'react';
import Context from './Context';
import PropTypes from 'prop-types';
import './style.less';

import Header from './Header';

const tempProps = {
  title: 'CushCore Inner Tire Suspension System',
};

export default function Articles() {
  const { title } = tempProps;
  return (
    <div className="article">
      <Header title={title} />
      <Context />
    </div>
  );
}
