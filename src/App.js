import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayersPage from './pages/PlayersPage';
import TeamsPage from './pages/TeamsPage';
import MatchesPage from './pages/MatchesPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/players" element={<PlayersPage />} />
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/matches" element={<MatchesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer />
  </Router>
  );
};

export default App;