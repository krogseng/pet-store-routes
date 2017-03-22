import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Stores from '../components/Stores';
import Store from '../components/Store';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [{
        store_id: 1,
        location: 'downtown',
      },
      {
        store_id: 2,
        location: 'midtown',
      },
      {
        store_id: 3,
        location: 'uptown',
      }],
      pets: [
        {
          pet_id: 11,
          name: 'george',
          storeId: 1,
          type: 'cat',
          cost: '$2'
        },
        {
          pet_id: 12,
          storeId: 1,
          name: 'petunia',
          type: 'parakeet',
          cost: '$12'
        },
        {
          pet_id: 24,
          storeId: 2,
          name: 'hairy',
          type: 'sloth',
          cost: '$3'
        }, {
          pet_id: 21,
          storeId: 2,
          name: 'gladys',
          type: 'cat',
          cost: '$7'
        },
        {
          pet_id: 22,
          storeId: 2,
          name: 'slipper',
          type: 'parakeet',
          cost: '$17'
        },
        {
          pet_id: 34,
          storeId: 3,
          name: 'forager',
          type: 'sloth',
          cost: '$6'
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/stores' render={(props) => (
          <Stores { ...props }
            stores={this.state.stores}
            pets={this.state.pets} />
        )} />

        <Route path='/store/:store_id' render={(props) => (
          <Store { ...props }
            stores={this.state.stores}
            pets={this.state.pets} />
        )} />
      </div>
    );
  }
}

export default App;
