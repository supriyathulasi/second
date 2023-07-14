import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import Ticket from './components/Ticket';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router >
      <div>
        <Routes>
          <Route  path="/" element={<LoginPage />} />
          <Route  path="/landing" element={<LandingPage />} />
          <Route  path="/tickets/new" element={<Ticket />} />
          {/* <Route  path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
