import React from 'react';
import FeaturedSolid from '../../container/FeaturedSolid';

import './style.less';

import About from './About';
import FollowOn from './FollowOn';

export default function Footer({ avatarUrl,imgArray }) {
  return (
    <div className="footer">
      <div className="left">
        <About avatarUrl={avatarUrl} />
        <FollowOn />
      </div>
      <FeaturedSolid imgArray={imgArray}/>
    </div>
  );
}
