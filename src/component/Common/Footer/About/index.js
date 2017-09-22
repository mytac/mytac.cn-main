import React from 'react';
import PropTypes from 'prop-types';
import './style.less';
import { Title } from '../../../Common';

export default function About({ avatarUrl }) {
  return (
    <div className="about">
      <Title title="ABOUT ME" />
      <div className="pic">
        <img src={avatarUrl} alt="" />
      </div>
      <div className="description">
        <p className="name">MyTac</p>
        <p className="context">Blog featuring professional snowboarders,
            videos, photos, links, random videos, stunts, and other things.</p>
      </div>
    </div>
  );
}
