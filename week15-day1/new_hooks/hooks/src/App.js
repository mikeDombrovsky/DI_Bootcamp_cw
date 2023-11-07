import "./App.css";
import Context from "./Context";

function App() {
  const sharedState = {
    data: "my data",
  };
  return (
    <Context.Provider value={sharedState}>
      <div className="App"></div>
    </Context.Provider>
  );
}

export default App;
