import React from 'react';
import Login from './Login';

const realString = '12345';
export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(str) {
    if (str === realString) {
      this.str = str;
      // todo:react-router跳转
      console.log('success');
      this.props.history.push('/admin/manage');
    }
  }

  render() {
    return (
      <div className="admin-page">
        <Login event={this.submit} />
      </div>
    );
  }
}
