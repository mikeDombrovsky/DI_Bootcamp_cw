import { useState, useRef } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const divRef = useRef();
  let name = "John";

  const nameRef = useRef("Dani");

  const showInputValue = () => {
    console.log("inputRef ", inputRef.current.value);
    console.log("divRef ", divRef.current.className);
    name = "bobby"; //doesn't work
    nameRef.current = "Poopy"; //shown after state change
  };

  return (
    <div className="App" ref={divRef}>
      <h1>
        {name}
        <br />
        {nameRef.current}
      </h1>
      <input ref={inputRef} />
      <button onClick={showInputValue}>console refs</button>
      <button onClick={() => setCount(count + 1)}>counter</button>
      <div>{count}</div>
    </div>
  );
}

export default UseRef;
