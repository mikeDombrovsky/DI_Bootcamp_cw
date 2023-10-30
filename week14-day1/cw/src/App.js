import Hi from './components/Hi.js'
import './App.css';
import ToDoList from './components/ToDoList.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hi/>
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;
