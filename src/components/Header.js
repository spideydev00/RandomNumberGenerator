// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpeg';

const Header = () => (
  <header className="header">
    <img src={logo} alt="RANDOM.ORG Logo" className="logo" />
    <nav>
      <span class="home">Home</span>
      <a href="#games">Games</a>
      <a href="#numbers">Numbers</a>
      <a href="#lists">Lists & More</a>
      <a href="#draws">Drawings</a>
      <a href="#tools">Web Tools</a>
      <a href="#statistics">Statistics</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#learn">Learn More</a>
      <a href="#login">Login</a>
    </nav>
  </header>
);

export default Header;
