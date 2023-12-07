import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Learning  from "./pages/Learning";
import Projects  from "./pages/Projects";
import Papers from "./pages/Papers";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/learning" element={<Learning/>} />
            <Route path="/Projects" element={<Projects/>} />
             <Route path="/Papers" element={<Papers/>} />
        </Routes>
    </Router>
  );
}

export default App;
