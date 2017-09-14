import React from 'react';
import './style.less';
import Poster from './Poster';

export default class Trendings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgArray } = this.props;
    return (
      <div className="trendings">
        <div className="posters-wrapper">
          <Poster imgUrl={imgArray[0]} />
          <Poster imgUrl={imgArray[1]} />
          <Poster imgUrl={imgArray[2]} />
          <Poster imgUrl={imgArray[3]} />
        </div>
      </div>
    );
  }
}
