import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import assets from '../assets/asset';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative w-full bg-cover  bg-center h-screen"
      style={{ backgroundImage: `url(${assets.team})` }}
    >
      <div className='bg-black bg-opacity-80'>
        <div className="flex justify-between items-center h-[133px] px-6 py-3">
          {/* Logo */}
       <Link to='/' >
          <img
            src={assets.yugant}
            alt="Yugant Logo"
            className="h-[100px] w-auto object-contain"
          />
       </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-x-8 text-lg font-medium">
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/about">
              About Us
            </NavLink>
            <NavLink to="/team">
              Our Team
            </NavLink>
            <NavLink to="/services">
              Services
            </NavLink>
            <NavLink to="/career">
              Career
            </NavLink>
            <NavLink to="/contact">
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <CiMenuBurger
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setMenuOpen(prev => !prev)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[133px] right-0 w-1/2 bg-black bg-opacity-90 text-white px-6 py-4 flex flex-col z-50 space-y-4">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/team" onClick={() => setMenuOpen(false)}>Our Team</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/career" onClick={() => setMenuOpen(false)}>Career</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
        </div>
      )}


    </div>
  );
};

export default Header;




