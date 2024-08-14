import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './Pages/About';
import Login from './Pages/Login';
import NavBar from './Components/NavBar'

function AppRouter() {
  
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;
