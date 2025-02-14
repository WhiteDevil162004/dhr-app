import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import './Header.scss';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <span>Logo</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          {/* Login Button */}
          <button className="header__login-btn">
            <LogIn />
            Login
          </button>

          {/* Desktop Drawer Button */}
          <button
            onClick={toggleDrawer}
            className="header__drawer-btn header__drawer-btn--desktop"
            aria-label="Toggle drawer"
          >
            {isDrawerOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Drawer Button */}
          <button
            onClick={toggleDrawer}
            className="header__drawer-btn header__drawer-btn--mobile"
            aria-label="Toggle mobile menu"
          >
            {isDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`drawer-overlay ${isDrawerOpen ? 'drawer-overlay--visible' : ''}`}
        onClick={toggleDrawer}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className={`drawer ${isDrawerOpen ? 'drawer--open' : ''}`}>
        <div className="drawer__header">

          <button
            onClick={toggleDrawer}
            className="drawer__close-btn"
            aria-label="Close drawer"
          >
            <X />
          </button>
        </div>
        <div className="drawer__content">
          <nav className="drawer__nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </nav>
          <button className="drawer__login-btn">
            <LogIn />
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;