import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tournaments">Tournaments</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
