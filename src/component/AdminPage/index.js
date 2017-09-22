import React from 'react';
import Login from './Login';

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin-page">
        <Login />
      </div>
    );
  }
}
