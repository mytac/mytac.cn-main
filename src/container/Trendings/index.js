import React from 'react';
import './style.less';
import Poster from './Poster';

export default class Trendings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStartMove: false, // 是否开始滑动
      isShowHeader: false, // 是否显示头部块
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
/*    setTimeout(() => {
      this.setState(prev => ({
        // index: prev.index += 1,
        isShowHeader: true,
        isStartMove: false,
      }));
    }, 2500);*/
  }

  render() {
    const { imgArray } = this.props;
    const { isStartMove, isShowHeader } = this.state;
    return (
      <div className="trendings">
        <div className="posters-wrapper">
          <Poster imgUrl={imgArray[0]} isStartMove={isStartMove} />
          <Poster imgUrl={imgArray[1]} isStartMove={isStartMove} />
          <Poster imgUrl={imgArray[2]} isStartMove={isStartMove} />
          <Poster imgUrl={imgArray[0]} isStartMove={isStartMove} />
          <Poster imgUrl={imgArray[1]} isStartMove={isStartMove} />
          <Poster imgUrl={imgArray[2]} isStartMove={isStartMove} />
          <Poster imgUrl={imgArray[2]} isStartMove={isStartMove} />
          <Poster imgUrl={imgArray[2]} isStartMove={isStartMove} />
        </div>
      </div>
    );
  }
}
