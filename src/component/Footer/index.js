import React from 'react';
import './style.less';

import About from './About';
import FollowOn from './FollowOn';

export default function Footer({ avatarUrl }) {
  return (
    <div className="footer">
      <div className="left">
        <About avatarUrl={avatarUrl} />
        <FollowOn />
      </div>

    </div>
  );
}
