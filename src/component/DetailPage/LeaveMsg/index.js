import React from 'react';
import PropTypes from 'prop-types';
import { Title, ReadMoreBtn } from '../../Common';
import './style.less';

const InputBox = ({ title }) => (
  <div className="input-box">
    <p className="input-label">{ title }</p>
    <input type="text" />
  </div>
);

const InputArea = ({ title }) => (
  <div className="input-area">
    <p className="input-label">{ title }</p>
    <textarea name="comment" id="" cols="45" rows="10" required="required" />
  </div>
);

export default function LeaveMsg() {
  return (
    <div className="LeaveMsg">
      <Title title="Comment" />
      <div className="wrapper">
        <InputArea title="Comment" />
        <InputBox title="Name *" />
        <InputBox title="Email *" />
      </div>
      <ReadMoreBtn text="Leave Message" />
    </div>
  );
}

LeaveMsg.propTypes = {

};

InputBox.propTypes = {
  title: PropTypes.string.isRequired,
};

InputArea.propTypes = {
  title: PropTypes.string.isRequired,
};
