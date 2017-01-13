import React, { Component } from 'react';
import logo from './logo.svg';
import './Welcome.css';

export default class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="Welcome-header">
          <img src={logo} className="Welcome-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}