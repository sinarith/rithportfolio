import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
