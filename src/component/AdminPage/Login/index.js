import React from 'react';
import PropTypes from 'prop-types';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    const { input } = this.state;
    return (
      <div className="Login">
        <input type="password" id="psd1" onChange={this.handleChange} value={input} />
        <button onClick={() => this.props.event(input)}>Go</button>
      </div>
    );
  }
}

Login.propTypes = {
  event: PropTypes.func.isRequired,
};
