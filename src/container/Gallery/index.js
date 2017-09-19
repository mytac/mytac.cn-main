import React from 'react';
import { Link } from 'react-router-dom';
import Hammer from 'react-hammerjs';
import 'animate.css';

import './style.less';
import { LeftBtn, RightBtn } from './Button';
import Poster from './Poster';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      animateKlass: '',
    };
    this.changeIndex = this.changeIndex.bind(this);
    this.autoSlide = this.autoSlide.bind(this);
  }

  componentDidMount() {
    this.autoSlide();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearTimeout(this.timeOutTimer);
    clearTimeout(this.recallTimerId);
  }

  autoSlide() {
    this.timer = setInterval(
      () => { this.changeIndex('left', 'auto'); }, 5000,
    );
  }

  changeIndex(type, caller) {
    const { transferNum } = this.props;
    /* eslint-disable no-return-assign, no-param-reassign */
    this.setState({
      animateKlass: '',
    });

    this.timeOutTimer = setTimeout(() => {
      this.setState((prevState, props) => {
        transferNum(this.state.index);
        let prev = prevState.index;
        const len = props.imgArray.length;
        if (type === 'left') {
          const index = prev === 0 ? len - 1 : prev -= 1;
          transferNum(index);
          return {
            index,
            animateKlass: 'slideInRight',
          };
        }
        const index = prev === len - 1 ? 0 : prev += 1;
        transferNum(index);
        return {
          index,
          animateKlass: 'slideInLeft',
        };
      });
    }, 50);
    clearInterval(this.timer);
    if (caller) {
      this.autoSlide();
    } else {
      clearTimeout(this.recallTimerId);
      this.recallTimerId = setTimeout(() => {
        this.autoSlide();
      }, 2000);
    }
  }

  render() {
    const { imgArray } = this.props;
    const { index, animateKlass } = this.state;
    return (
      <div className="gallery">
        {/* 这里需要在react-hammer中添加onSwipeLeft、onSwipeRight这两个事件 */}
        {/* onSwipeRight: 'swiperight',onSwipeLeft: 'swipeleft', */}
        <Hammer
          onSwipeLeft={() => this.changeIndex('left')}
          onSwipeRight={() => this.changeIndex('right')}
        >
          <Link to={`/${index}`}><Poster animateKlass={animateKlass} imgUrl={imgArray[index]} /></Link>
        </Hammer>
        <div className="btn-wrapper">
          <LeftBtn event={() => this.changeIndex('left')} />
          <RightBtn event={() => this.changeIndex('right')} />
        </div>
      </div>
    );
  }
}
