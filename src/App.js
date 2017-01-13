import React, { Component } from 'react';
import Welcome from './components/Welcome/Welcome';
import Clock from './components/Clock/Clock';
import Calculator from './components/Calculator/Calculator';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <Clock />
        <FilterableProductTable />
        <hr />
        <Calculator />
      </div>
    );
  }
}

export default App;