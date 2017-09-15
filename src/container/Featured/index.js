import React from 'react';
import PropType from 'prop-types';
import Title from '../../component/Title';
import StoryPage from '../../component/StoryPage';
import './style.less';

export default class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featured">
        <Title title="FEATURED" />
        <div className="pages-wrapper">
          <StoryPage content="this is content" img=" " title="this is title" />
          <StoryPage content="this is content" img=" " title="this is title" />
        </div>
      </div>
    );
  }
}

