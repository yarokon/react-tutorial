import React, {Component} from 'react';

export default class BoilingVerdict extends Component {

  render() {
    if (this.props.celsius >= 100) {
      return <p className="boil">The water would boil.</p>;
    }
    return <p className="notBoil">The water would not boil.</p>;
  }
}