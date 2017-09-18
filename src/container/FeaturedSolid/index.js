import React from 'react';
import Title from '../../component/Title';
import './style.less';

export default class FeaturedSolid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.autoPlay = this.autoPlay.bind(this);
  }

  componentDidMount() {
    this.autoPlay();
  }

  autoPlay() {
    const LEN = this.props.imgArray.length;
    setInterval(() => {
      this.setState(
        (prev) => {
          let prevIndex = prev.index;
          /* eslint-disable no-return-assign */
          if (prevIndex >= 0 && prevIndex < LEN - 1) return ({ index: prevIndex += 1 });
          return ({
            index: 0,
          });
        },
      );
    }, 5000);
  }

  render() {
    const { imgArray } = this.props;
    const { index } = this.state;
    return (
      <div className="featured-solid">
        <Title title="FEATURED" />
        <div className="pic" style={{ backgroundImage: `url(${imgArray[index]})` }} />
        <div className="description">
          <h4>{imgArray[index]}</h4>
        </div>
      </div>
    );
  }
}