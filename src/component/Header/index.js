import React from 'react';
import { Icon } from 'semantic-ui-react';
import './style.less';


export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="logo">
          <span>MyTac</span>
        </div>
        <Icon name="diamond" size="small" />
      </div>
    </div>
  );
}
