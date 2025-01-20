import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#f2f2f2' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/analyze" style={{ marginRight: '10px' }}>Analyze Resume</Link>
      <Link to="/recommendations" style={{ marginRight: '10px' }}>Recommendations</Link>
      <Link to="/jobs">Job Search</Link>
    </nav>
  );
};

export default Navbar;