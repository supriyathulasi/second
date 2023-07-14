import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import Ticket from './components/Ticket';
import NotFound from './components/NotFound';

const App = () => {
  return (
    // <Router >
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route exact  path="/" element={<LoginPage />} />
          <Route exact  path="/landing" element={<LandingPage />} />
          <Route exact  path="/tickets/new" element={<Ticket />} />
          {/* <Route  path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
      </BrowserRouter>
    // </Router>
  );
};

export default App;
