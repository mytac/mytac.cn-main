import React from 'react';
import './style.less';

import { LeftBtn, RightBtn } from './Button';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(type) {
    /* eslint-disable no-return-assign, no-param-reassign */
    this.setState((prevState, props) => {
      let prev = prevState.index;
      const len = props.imgArray.length;
      if (type === 'left') {
        return { index: prev === 0 ? len - 1 : prev -= 1 };
      }
      return { index: prev === len - 1 ? 0 : prev += 1 };
    });
  }

  render() {
    const { imgArray } = this.props;
    const { index } = this.state;
    
    return (
      <div className="gallery">
        <img src={imgArray[index]} alt="" />
        <div className="btn-wrapper">
          <LeftBtn event={() => this.changeIndex('left')} />
          <RightBtn event={() => this.changeIndex('right')} />
        </div>
      </div>
    );
  }
}
