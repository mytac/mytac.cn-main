import React from 'react';
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

  autoSlide() {
    this.timer = setInterval(
      () => { this.changeIndex('left', 'auto'); }, 5000,
    );
  }

  changeIndex(type, caller) {
    /* eslint-disable no-return-assign, no-param-reassign */
    this.setState({
      animateKlass: '',
    });

    setTimeout(() => {
      this.setState((prevState, props) => {
        let prev = prevState.index;
        const len = props.imgArray.length;
        if (type === 'left') {
          return {
            index: prev === 0 ? len - 1 : prev -= 1,
            animateKlass: 'slideInRight',
          };
        }
        return {
          index: prev === len - 1 ? 0 : prev += 1,
          animateKlass: 'slideInLeft',
        };
      });
    }, 50);

    clearInterval(this.timer);
    if (caller) {
      this.autoSlide();
    } else {
      clearInterval(this.recallTimerId);
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
        <Poster animateKlass={animateKlass} imgUrl={imgArray[index]} />
        <div className="btn-wrapper">
          <LeftBtn event={() => this.changeIndex('left')} />
          <RightBtn event={() => this.changeIndex('right')} />
        </div>
      </div>
    );
  }
}
