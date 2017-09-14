import React from 'react';
import './style.less';
import Poster from './Poster';

export default class Trendings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="trendings">
        <Poster />
        <Poster />
        <Poster />
      </div>
    );
  }
}
