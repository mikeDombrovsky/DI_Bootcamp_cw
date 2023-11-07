import "./App.css";
import App2 from "./App2";
import Action from "./components/Action";
import Display from "./components/Display";

import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ count, increment }}>
        <Display />
        <Action />
      </AppContext.Provider>
      <App2/>
    </div>
  );
}

export default App;
