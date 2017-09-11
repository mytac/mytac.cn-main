import React from 'react';
import { Icon } from 'semantic-ui-react';
import './style.less';

const handleStyle = (positionY = '100%', img = '\'https://image.freepik.com/free-vector/pink-polygonal-background_23-2147495183.jpg\'') => (
  { positionY, backgroundImage: `url(${img})` }
);

export default function Header({ positionY, img }) {
  return (
    <div className="header" style={handleStyle(positionY, img)}>
      <div className="wrapper">
        <div className="logo">
          <span>MyTac</span>
        </div>
        <Icon name="diamond" size="small" />
      </div>
    </div>
  );
}