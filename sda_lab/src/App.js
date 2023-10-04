import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SeatingPlan from './components/SeatingPlan';
import StudentDetails from './components/StudentDetails';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seating-plan/:registrationNumber" element={<SeatingPlan />} />
        <Route path="/student-details" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
