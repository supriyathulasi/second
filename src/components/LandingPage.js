import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const LandingPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username') || '';

  const getCurrentTimeGreeting = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      return 'Good Morning';
    } else if (currentTime < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <div>
      <h1>
        {getCurrentTimeGreeting()} Rescuer! How are you doing today, {username}?
      </h1>
     
          
            <Link to="/tickets/new">Create New Ticket</Link>
          
    </div>
  );
};

export default LandingPage;
