import React from 'react';
import './style.less';

import { LeftBtn, RightBtn } from './Button';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    const { imgArray } = this.props;
    const { index } = this.state;

    return (
      <div className="gallery">
        <img src={imgArray[index]} alt="" />
        <div className="btn-wrapper">
          <LeftBtn />
          <RightBtn />
        </div>
      </div>
    );
  }
}
