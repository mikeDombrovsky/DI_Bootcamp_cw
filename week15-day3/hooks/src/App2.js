import "./App.css";
import Action from "./components/Action";
import Display from "./components/Display";

import { useState, useRef } from "react";

// export const AppContext = createContext();

function App2() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const divRef = useRef();
  let name = "John";

  const nameRef = useRef("Dani");
  //   useEffect(() => {
  //
  //   });

  const showInputValue = () => {
    console.log("inputRef ", inputRef.current.value);
    console.log("divRef ", divRef.current.className);
    name = "bobby";//doesn't work
    nameRef.current = "Poopy";//shown after state change
  };

  return (
    <div className="App" ref={divRef}>
      <h1>
        {name}<br/>
        {nameRef.current}
      </h1>
      <input ref={inputRef} />
      <button onClick={showInputValue}>console refs</button>
      <button onClick={() => setCount(count + 1)}>counter</button>
      <div>{count}</div>
    </div>
  );
}

export default App2;
