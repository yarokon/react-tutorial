import React, {Component} from 'react';

let clockStyle = {
  textAlign: 'center',
  fontFamily: 'PT Sans',
  background: '#f7d87c',
  padding: 15
};

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div style={clockStyle}>
      <h1 style={{marginTop:0}}>Hello, world!</h1>
        <FormattedDate date={this.state.date}/>
      </div>
    );
  }
}

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}