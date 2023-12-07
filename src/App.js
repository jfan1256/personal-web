import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Projects from './pages/Projects';
import Papers from './pages/Papers';
import 'bootstrap/dist/css/bootstrap.min.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/papers" element={<Papers />} />
      </Routes>
    </Router>
  );
}

export default App;
