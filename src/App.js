// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Sections from './sections';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Startsidan */}
        <Route path="/" element={<Home />} />

        {/* Dina tre nya sidor */}
        <Route path="/page1" element={<PageOne />} />
        <Route path="/page2" element={<PageTwo />} />
        <Route path="/page3" element={<PageThree />} />
      </Routes>
    </Router>
  );
}

export default App;