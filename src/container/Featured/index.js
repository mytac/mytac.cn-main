import React from 'react';
import PropType from 'prop-types';
import Title from '../../component/Title';
import StoryPage from '../../component/StoryPage';
import './style.less';

const temp = 'Milk the cow kitty scratches couch bad kitty. Chase red laser dot please stop looking at your phone and pet me. I could pee on this if i had the energy sun bathe eat the fat cats food. Knock dish off table head butt cant eat out of my own dish. Eat all the power cords spill litter box, scratch at owner, destroy all furniture, especially couch for scratch at the door then walk awaychew iPad power cord dream about hunting birds. Caticus cuteicus kitty! kitty!, so give attitude, and scream for no reason at 4 am or claws in your leg for stand in front of the computer screen';

export default class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featured">
        <Title title="FEATURED" />
        <div className="pages-wrapper">
          <StoryPage content={temp} img="https://image.freepik.com/free-vector/pink-polygonal-background_23-2147495183.jpg" title="this is title" />
          <StoryPage content={temp} img=" " title="this is title" />
        </div>
      </div>
    );
  }
}

