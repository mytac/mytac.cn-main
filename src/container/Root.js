import React from 'react';

import Header from '../component/Header';
import Gallery from '../container/Gallery';
import Trendings from '../container/Trendings';
import Featured from '../container/Featured';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picIndex: 0,
    };
    this.transferNum = this.transferNum.bind(this);
  }

  transferNum(num) {
    this.setState({
      picIndex: num,
    });
  }

  render() {
    const { imgArray } = this.props;
    return (
      <div>
        <Header img={imgArray[this.state.picIndex]} />
        <Gallery imgArray={imgArray} transferNum={this.transferNum} />
        <Trendings imgArray={imgArray} />
        <Featured />
      </div>
    )
    ;
  }
}
