import React from 'react';
import PropTypes from 'prop-types';
import './style.less';
import Title from '../../Title';
import SquareButton from './Square';

const myLinks = [
  { icon: 'fa-weibo', link: 'weibo' },
  { icon: 'fa-weixin', link: 'weixin' },
  { icon: 'fa-github', link: 'github' },
  { icon: 'fa-link', link: 'wordpress' },
  { icon: 'fa-superpowers', link: 'wordpress' },
  { icon: 'fa-music', link: 'wordpress' },
];

export default function FollowOn() {
  return (
    <div className="follow-on" >
      <Title title="FOLLOW ON" />
      <div className="links">
        {myLinks.map(link => <SquareButton icon={`fa ${link.icon}`} title={link.icon} key={link.icon} />)}
      </div>
    </div>
  );
}
