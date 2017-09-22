import React from 'react';

import { Header, ToTopButton, Footer } from '../Common';
import Gallery from '../../container/Gallery';
import Trendings from '../../container/Trendings';
import Featured from './Featured';
import ContextWrapper from './Context-wrapper';

export default class MainPage extends React.Component {
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
        <ContextWrapper imgArr={imgArray} />
        <Footer avatarUrl={imgArray[0]} imgArray={imgArray} />
        <ToTopButton />
      </div>
    )
    ;
  }
}
