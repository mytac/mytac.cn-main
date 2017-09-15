import React from 'react';
import './style.less';

export default function Title({ title }) {
  return (
    <div className="title"><span>{title}</span></div>
  );
}
