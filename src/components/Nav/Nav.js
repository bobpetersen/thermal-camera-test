import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="GridHeader">
    <div id="home">
      <Link to="/dash">
        Home
      </Link>
    </div>
    <div id="site">
      <Link to="/site">
        Site Filter
      </Link>
    </div>
    <div id="profile">
      <Link to="/profile">
        Profile Filter
      </Link>
    </div>

  </div>
);

export default Nav;
