import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frontpage from "./pages/frontpage";
import Loginpage from "./pages/loginpage";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/:username" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
