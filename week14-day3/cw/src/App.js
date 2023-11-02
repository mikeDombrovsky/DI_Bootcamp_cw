
import './App.css';
import SearchCar from './components/SearchCar';
import { useState } from 'react';
import Car from './components/Car';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Heroes from './components/Heroes';
import ErrorBoundary from './components/ErrorBoundary';

const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "ford torino",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "ford",
    name: "ford galaxie 500",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 3,
    brand: "chevrolet",
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  },
  {
    id: 4,
    brand: "peugeot",
    name: "peugeot 504 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
  {
    id: 5,
    brand: "renault",
    name: "renault 12 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
];

let nameChosenCar;



function App() {
  const [nameChosenCar, setNameChosenCar] = useState('none');
  const [chosenCars, setChosenCars] = useState([]);

  const handleChange = (e) => {
    const searchedCars = listCars.filter(car => car.brand.includes(e.target.value));
    setNameChosenCar(e.target.value);
    setChosenCars(searchedCars);
  }

  return (
    <div>
      {/* <SearchCar cars={listCars} handleChange={handleChange} />
      <Car chosenCars={chosenCars} nameChosenCar={nameChosenCar} /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects/:name/:id' element={<Projects />} />
      </Routes>
      <ErrorBoundary>
        <Heroes name='Luke' />
      </ErrorBoundary>

      <Heroes name='Yoda' />
      <ErrorBoundary>
        <Heroes name='Darth Vader' />
      </ErrorBoundary>
    </div>
  );
}

export default App;
