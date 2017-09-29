import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './style.less';

const handleStyle = (positionY = '100%', img) => (
  { positionY, backgroundImage: `url(${img})` }
);

export default function Header({ positionY, img }) {
  return (
    <div className="header" style={handleStyle(positionY, img)}>
      <div className="wrapper">
        <div className="logo">
          <span>MyTac</span>
        </div>
        <Link to={'/admin'}><Icon name="diamond" size="small" /></Link>
      </div>
    </div>
  );
}
