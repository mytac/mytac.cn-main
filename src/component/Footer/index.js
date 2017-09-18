import React from 'react';
import './style.less';

import About from '../../component/About';

export default function Footer({ avatarUrl }) {
  return (
    <div className="footer">
      <About avatarUrl={avatarUrl} />
    </div>
  );
}
