import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Router,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setToken = (token) => {
    setIsAuthenticated(true);
    localStorage.setItem("token", token);
  };

  const removeToken = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    isTokenValid();
  });

  async function isTokenValid() {
    try {
      const response = await fetch("http://localhost:5000/auth/verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const pasrsedResp = await response.json();
      console.log(pasrsedResp);
      setIsAuthenticated(pasrsedResp === true);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route
              exect
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard removeToken={removeToken} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              exect
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Login setToken={setToken} />
                )
              }
            />
            <Route
              exect
              path="/register"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Register setToken={setToken} />
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
