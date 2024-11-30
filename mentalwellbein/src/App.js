import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import MentalStatus from "./components/MentalStatus";
import Profile from "./components/Profile";
import Emergency from "./components/Emergency";
import Resources from "./components/Resources";
import '../src/styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mental-status" element={<MentalStatus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;