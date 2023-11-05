import "./App.css";
import Products from "./components/Products";
import { Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
