import React from 'react';
import './style.less';
import ScrollDetector from '../ScrollDetector';
import Poster from './Poster';
import { Title } from '../../component/Common';

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
      isShow: false,
    };
    this.autoSlide = this.autoSlide.bind(this);
    this.getChildState = this.getChildState.bind(this);
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

  getChildState(state) {
    this.setState({
      isShow: state,
    });
  }

  render() {
    const { imgArray } = this.props;
    const { isStartMove, isShow } = this.state;
    const handledImgArrs = handleImgArray(imgArray);
    return (
      <div className={`trendings animated ${isShow ? 'fadeIn' : 'fadeOut'}`}>
        <ScrollDetector getChildState={this.getChildState} />
        <Title title="TRENDINGS" />
        <div className="posters-wrapper">
          {handledImgArrs.map((img, idx) => <Poster imgUrl={img} isStartMove={isStartMove} key={`${img}-${idx}`} />)}
        </div>
      </div>
    );
  }
}
