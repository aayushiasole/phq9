import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import PatientForm from './pages/PatientForm';
import Questionnaire from './pages/Questionnaire';
import Report from "./pages/Report";
import HomePage from './pages/HomePage';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* We will add more routes here soon */}
        <Route path="/patient" element={<PatientForm />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
