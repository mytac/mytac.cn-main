import React from 'react';
import PropTypes from 'prop-types';
import ScrollDetector from '../ScrollDetector';

import './style.less';
import LittlePage from '../../component/LittlePage';

export default class ContextWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,

    };
    this.getChildState = this.getChildState.bind(this);
  }

  getChildState(state) {
    this.setState({
      isShow: state,
    });
  }

  render() {
    const { imgArr } = this.props;
    const { isShow } = this.state;
    return (
      <div className={`context-wrapper animated ${isShow ? 'fadeIn' : 'fadeOut'}`}>
        <ScrollDetector getChildState={this.getChildState} />
        {imgArr.map((imgUrl, index) => <LittlePage img={imgUrl} key={`${index}-${imgUrl}`} />)}
      </div>
    );
  }
}

ContextWrapper.propTypes = {
  imgArr: PropTypes.array.isRequired,
};
