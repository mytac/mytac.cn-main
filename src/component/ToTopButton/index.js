import React from 'react';
import './style.less';

// 定位到头部
const toTop = () => {
  document.documentElement.scrollTop = -200;
  document.body.scrollTop = -200;
};

export default class ToTopButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };

    this.viewHeight = document.documentElement.clientHeight;
    this.getScrollHeight = this.getScrollHeight.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getScrollHeight, false);
    this.focusTextInput.focus();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getScrollHeight, false);
  }

  // 根据滚轮高度判断是否显示toTopButton
  getScrollHeight() {
    const { top } = this.focusTextInput.parentNode.getBoundingClientRect();
    this.setState({
      isShow: Math.abs(top) > this.viewHeight,
    });
  }

  render() {
    return (
      <div
        className="to-top-button"
        ref={(pos) => { this.focusTextInput = pos; }}
        style={{ display: !this.state.isShow && 'none' }}
        onClick={() => toTop()}
      >
        <i
          className="fa fa-chevron-up"
        />
      </div>
    );
  }
}
