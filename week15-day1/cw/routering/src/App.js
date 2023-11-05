import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import User from "./components/User";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        {"  "}
        <Link to="/about">About </Link>
        {"  "}
        <Link to="/contacts">Contact</Link>
        {"  "}
        <Link to="/user">User</Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
        <Routes>
          <Route path="/**" element={<>lol</>} />
        </Routes>
        <div>Some Static data</div>
      </div>
    </div>
  );
}

export default App;
