import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundary";

import "./App.css";

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchField: ''
  //   }
  // }
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(resp => resp.json())
  //     .then(users => this.setState({ robots: users }));

  // }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => setRobots(users));
  }, []);//add count to this arr to listen on its changes

  const onSearchChange = (event) => {
    // this.setState({ searchField: event.target.value });
    setSearchField(event.target.value);
  };

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <button onClick={()=>setCount(count + 1)}>Click me!</button>
      <SearchBox seachChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
};

export default App;
