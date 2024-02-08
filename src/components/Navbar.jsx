import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="nav-list">
      <li><a href="/" className="nav-link">Home</a></li>
      <li><a href="/about-me" className="nav-link">About me</a></li>
    </ul>
  </nav>
  )
}

export default Navbar
