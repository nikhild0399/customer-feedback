import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home/FeedbackForm";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      console.log("User Data:", data); 
      setUser(data.user); 
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={user ? <Home user={user} /> : <Navigate to="/signup" />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
