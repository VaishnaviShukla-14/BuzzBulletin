import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Logout() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirect to the login page
    navigate('/login');
  };

  const handleHomeClick = () => {
    // Redirect to the homepage
    navigate('/');
  };

  useEffect(() => {
    // Clear the 'name' cookie
    Cookies.remove('name');
  }, []);

  return (
    <div>
      <p>Logging out...</p>
      <div>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleHomeClick}>Homepage</button>
      </div>
    </div>
  );
}

export default Logout;
