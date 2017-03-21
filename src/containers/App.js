import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Stores from '../components/Stores';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [{
        id: 1,
        location: 'downtown',
      },
      {
        id: 2,
        location: 'midtown',
      },
      {
        id: 3,
        location: 'uptown',
      }],
      pets: [{
        id: 11,
        storeId: 1,
        type: 'cat'
      },
      {
        id: 12,
        storeId: 1,
        type: 'parakeet'
      },
      {
        id: 14,
        storeId: 1,
        type: 'sloth'
      },]
    }
  }
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/stores' render={(props) => (
          <Stores { ...props } stores={this.state.stores} pets={this.state.pets} />
        )} />
      </div>
    );
  }
}

export default App;
