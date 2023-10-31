import React, { Component } from 'react';
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ robots: users }));

  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });
    console.log('render');

    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox seachChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterRobots} />
          </ErrorBoundry>
        </Scroll>

      </div>
    );
  }
}

export default App;
