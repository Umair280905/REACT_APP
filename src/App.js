import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar title="Hello!" aboutText="About Us" />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<h1>Home Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
