import React, {Component} from 'react';

export default class TemperatureInput extends Component {
  state = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  handleChange = e => {
    this.props.onChange(e.target.value);
  }

  render() {
    const { value, scale } = this.props;

    return (
      <fieldset>
        <legend>Enter temperature in {this.state[scale]}:</legend>
        <input value={value}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}