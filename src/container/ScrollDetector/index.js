import React from 'react';

export default class ScrollDetector extends React.Component {
  constructor(props) {
    super(props);
    this.viewHeight = document.documentElement.clientHeight;
    this.getRect = this.getRect.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => { this.getRect(); });
    this.focusTextInput.focus();
  }

  getRect() {
    const { bottom, height } = this.focusTextInput.parentNode.getBoundingClientRect();
    const { getChildState } = this.props;
    getChildState((bottom - height) < (this.viewHeight * 0.75));
  }

  render() {
    return (
      <div className="detector" ref={(pos) => { this.focusTextInput = pos; }} />
    );
  }
}
