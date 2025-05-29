import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import assets from '../assets/asset';
import React from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSpecialPath, setIsSpecialPath] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();

  const pathTitles = {
    '/about': 'About Us',
    '/team': 'Our Team',
    '/services': 'Services',
    '/career': 'Career',
    '/contact': 'Contact Us',
  };

  // Update when location changes
  useEffect(() => {
    const currentPath = location.pathname;
    setIsSpecialPath(Object.keys(pathTitles).includes(currentPath));
    setPageTitle(pathTitles[currentPath] || '');

    // Close mobile menu on navigation
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div
      className="relative w-full bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${assets.team})`, opacity: 0.8 }}
    >
      <div className="bg-black bg-opacity-80 h-[133px] ">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center h-[133px] px-6 py-3">
          {/* Logo */}
          <Link to="/">
            <img
              src={assets.yugant}
              alt="Yugant Logo"
              className="h-[100px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-x-8 text-lg font-medium text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/team">Our Team</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/career">Career</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <CiMenuBurger
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="fixed  right-0 w-1/2 h-[calc(100vh-133px)] bg-black bg-opacity-80 text-white px-6 py-4 flex flex-col z-50 space-y-4 rounded-tl-md ">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/team" onClick={() => setMenuOpen(false)}>Our Team</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
            <NavLink to="/career" onClick={() => setMenuOpen(false)}>Career</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
          </div>
        )}


        {/* Hero Content */}
        {isSpecialPath ? (
          <div className="flex items-center justify-center h-[calc(100vh-133px)] text-center px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              <p className="text-4xl md:text-6xl font-bold uppercase text-white">
                Home /
              </p>
              <p className="text-4xl md:text-6xl font-bold  text-[rgba(255,161,53,1)]">
                {pageTitle}
              </p>
            </div>
          </div>
        ) : (
          <div className="absolute bottom-8 left-6 md:left-12 flex flex-col items-start text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold uppercase">
              Accelerating Business
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-white/70">
              With Tech & Speed
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;






