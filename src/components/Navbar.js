"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import "../style/CustomNavbar.css";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };
useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`hidden_header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <div className="row">
          <nav id="nav-container">
            {/* Left Side: Hamburger & Contact */}
            <div className="left-side">
              <button id="nav-toggle" className={isNavOpen ? 'active' : ''} onClick={toggleNav}>
                <span></span><span></span><span></span>
              </button>
              <span className="mobile-number">📞 +91 9031359720</span>
            </div>
            {/* Logo */}
            <div className="logo-container">
              <img src="images/logo.png" alt="Brand Logo" className="navbar-logo" />
            </div>
            <div className="right-side">
              <Link href="/Explore_Our_Work"><button className="gradient-btn">Our_Work</button></Link>
              <button className="gradient-btn">Request a Quote</button>
            </div>
          </nav>
        </div>
      </div>
      <div id="nav-overlay" className={isNavOpen ? 'open' : ''}>
        <button id="close-overlay" onClick={closeNav}>✖</button>
        <div id="nav-fullscreen">
        <ul className="navbar-nav">
        <li><Link href="/" className="service" onClick={closeNav}>Home</Link></li>
       <li><Link href="/about" className="service" onClick={closeNav}>About</Link></li>
      <li className="dropdown">
      <Link href="/Services" className="service">Services</Link>
      <ul className="dropdown-menu">
      <li><Link href="/Services_Web" onClick={closeNav}>Web Development</Link></li>
      <li><Link href="/Services_App" onClick={closeNav}>App Development</Link></li>
      <li><Link href="/Services_Seo" onClick={closeNav}>SEO Optimization</Link></li>
      <li><Link href="/Services_Digital" onClick={closeNav}>Digital Marketing</Link></li>
    </ul>
  </li>
  <li><Link href="/Contact" className="service" onClick={closeNav}>Contact</Link></li>
  <li><Link href="/Team" className="service" onClick={closeNav}>Team</Link></li>
  <li><Link href="/Gallery" className="service" onClick={closeNav}>Gallery</Link></li>
  <li><Link href="/job" className="service" onClick={closeNav}>Carrier</Link></li>
  </ul>
 </div>
</div>
</header>
  );
};

export default Navbar;
