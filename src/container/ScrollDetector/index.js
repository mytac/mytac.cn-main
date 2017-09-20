import React from 'react';

export default class ScrollDetector extends React.Component {
  constructor(props) {
    super(props);
    this.viewHeight = document.documentElement.clientHeight;
    this.getRect = this.getRect.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.getRect, false);
    this.focusTextInput.focus();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getRect, false);
  }

  getRect() {
    const { bottom, height } = this.focusTextInput.parentNode.getBoundingClientRect();
    const { getChildState } = this.props;
    getChildState((bottom - height) < (this.viewHeight * 0.65));
  }

  render() {
    return (
      <div className="detector" ref={(pos) => { this.focusTextInput = pos; }} />
    );
  }
}
