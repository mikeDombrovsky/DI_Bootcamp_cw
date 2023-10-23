import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Car2 from './components/Car2';
import StarWars from './components/StarWars';

function App() {
  const str = 'I am learning react';
  const arr = ['Dani', 'Poopy'];

  const elem = (
    <div>
      element!
    </div>
  )
  return (
    <div className="App">
      <Car/>
      <Car2/>
      <StarWars/>
    </div>
  );
}

export default App;
