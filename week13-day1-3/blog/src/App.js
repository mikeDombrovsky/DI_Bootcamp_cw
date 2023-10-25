import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Car2 from './components/Car2';
import StarWars from './components/StarWars';
import Actor from './components/Actor';
import ActorAsClass from './components/ActorAsClass';
import Counter from './components/Counter';
import Sunrise from './components/Sunrise';
import Users from './components/Users';

function App() {
  const str = 'I am learning react';
  const arr = ['Dani', 'Poopy'];
  const carName = "SuperCar";
  const speed = '200km/h';
  const charactersJson = {
    "people": [
      {
        "id": "1",
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
      },
      {
        "id": "2",
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
      },
      {
        "id": "3",
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
      }
    ]
  };

  const actors = [
    {
      firstName: "Bobik",
      lastName: 'Bobikoff',
      image: '/image.jpg'
    },
    {
      firstName: "Poopy",
      lastName: 'Poopin',
      image: '/image2.jpg'
    }
  ]

  const elem = (
    <div>
      element!
    </div>
  )
  return (
    <div className="App">
      {/* <Car carName={carName} />
      <Car2 carName={carName} speed={speed} />
      <StarWars charactersJson={charactersJson} />
      <Actor actors={actors}/>*/}
      {/* <Counter/> */}
      {/* <ActorAsClass/> */}
      {/* <Sunrise/> */}
      <Users/>
    </div>
  );
}

export default App;
