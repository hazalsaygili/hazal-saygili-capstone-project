import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import NumerologyPage from './pages/NumerologyPage/NumerologyPage';
import ChakrasPage from './pages/ChakrasPage/ChakrasPage';
import CrystalsPage from './pages/CrystalsPage/CrystalsPage';
import AstrologyPage from './pages/AstrologyPage/AstrologyPage';
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/numerology" element={<NumerologyPage />} />
          <Route path="/chakras" element={<ChakrasPage />} />
          <Route path="/chakras/:chakraName" element={<ChakrasPage />} />
          <Route path="/crystals" element={<CrystalsPage />} />
          <Route path="/crystals/:crystalName" element={<CrystalsPage />} />
          <Route path="/astrology" element={<AstrologyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
