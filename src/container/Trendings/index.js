import React from 'react';
import './style.less';
import Poster from './Poster';

// 固定生成8个poster块
const handleImgArray = (arr) => {
  const LEN = arr.length;
  const head = arr.slice(LEN - 2, LEN);
  const mid = arr.slice(0, 4);
  const tailPos = LEN > 4 ? (LEN - (LEN % 4) - (4 * parseInt(((LEN / 4) - 1), 10))) : 0;
  const tail = [arr[tailPos], arr[tailPos + 1] || 0];
  return [].concat(head).concat(mid).concat(tail);
};

export default class Trendings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartMove: false, // 是否开始滑动
      index: 0,
    };
    this.autoSlide = this.autoSlide.bind(this);
  }
  componentDidMount() {
    this.autoSlide();
  }

  autoSlide() {
    /* eslint-disable no-return-assign, no-param-reassign */
    this.setState({
      isStartMove: true,

    });
  }

  render() {
    const { imgArray } = this.props;
    const { isStartMove } = this.state;
    const handledImgArrs = handleImgArray(imgArray);
    return (
      <div className="trendings">
        <div className="title"><span>TRENDING</span></div>
        <div className="posters-wrapper">
          {handledImgArrs.map((img, idx) => <Poster imgUrl={img} isStartMove={isStartMove} key={`${img}-${idx}`} />)}
        </div>
      </div>
    );
  }
}
