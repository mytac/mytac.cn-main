import React from 'react';
import PropTypes from 'prop-types';

import './style.less';
import LittlePage from '../../component/LittlePage';

export default class ContextWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgArr } = this.props;
    return (
      <div className="context-wrapper">
        {imgArr.map((imgUrl, index) => <LittlePage img={imgUrl} key={`${index}-${imgUrl}`} />)}
      </div>
    );
  }
}

ContextWrapper.propTypes = {
  imgArr: PropTypes.array.isRequired,
};
