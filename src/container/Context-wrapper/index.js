import React from 'react';
import PropTypes from 'prop-types';

import LittlePage from '../../component/LittlePage';

export default class ContextWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgArr } = this.props;
    return (
      <div className="context-wrapper">
        {imgArr.map(imgUrl => <LittlePage img={imgUrl} />)}
      </div>
    );
  }
}

ContextWrapper.propTypes = {
  imgArr: PropTypes.array.isRequired,
};
