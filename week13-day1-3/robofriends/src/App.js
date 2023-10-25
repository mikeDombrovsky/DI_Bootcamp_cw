import Card from './Card'
import './App.css';
import { robots } from './robots';

function App(props) {
  return (
    <div>
      {
        robots.map(robot => {
          return (
            <Card
              id={robot.id}
              name={robot.name}
              username={robot.username}
              email={robot.email}
            />
          )
        })
      }
    </div>

  );
}

export default App;
