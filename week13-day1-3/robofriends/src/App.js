import Card from './Card'
import { robots } from './robots';

function App() {
  return (
    <>
      {robots.map(robot => {
        return (
          <Card
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        )
      })}
    </>
  );
}

export default App;
