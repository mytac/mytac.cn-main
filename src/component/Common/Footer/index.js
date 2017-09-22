import React from 'react';
import PropTypes from 'prop-types';
import './style.less';

import About from './About';
import FollowOn from './FollowOn';
import { FeaturedSolid } from '../../../container/UIPlugins';
import LastList from './LastList';

export default function Footer({ avatarUrl, imgArray }) {
  return (
    <div className="footer">
      <div className="left">
        <About avatarUrl={avatarUrl} />
        <FollowOn />
      </div>
      <FeaturedSolid imgArray={imgArray} />
      <LastList imgArray={imgArray} />
    </div>
  );
}

Footer.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  imgArray: PropTypes.array.isRequired,
};
