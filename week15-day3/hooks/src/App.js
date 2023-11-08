import "./App.css";
import UseRef from "./components/UseRef";
import Action from "./components/Action";
import Display from "./components/Display";

import { useState, createContext } from "react";
import UseReducer from "./components/UseReducer";

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
      <UseRef />
      <UseReducer/>
    </div>
  );
}

export default App;
