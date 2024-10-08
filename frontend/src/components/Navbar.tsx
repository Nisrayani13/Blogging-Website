import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/signup" style={{ color: '#fff', textDecoration: 'none' }}>Sign Up</Link></li>
        <li><Link to="/signin" style={{ color: '#fff', textDecoration: 'none' }}>Sign In</Link></li>
        <li><Link to="/blogs" style={{ color: '#fff', textDecoration: 'none' }}>Blogs</Link></li>
        <li><Link to="/publish" style={{ color: '#fff', textDecoration: 'none' }}>Publish</Link></li>
      </ul>
    </nav>
    </div>
  )
}

