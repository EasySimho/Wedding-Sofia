import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-peach" />
            <span className="font-serif text-xl">Simone & Sofia</span>
          </NavLink>
          
          <div className="hidden sm:flex space-x-8">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `hover:text-accent-dark transition-colors ${isActive ? 'text-accent-dark' : 'text-text-secondary'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about-us"
              className={({ isActive }) => 
                `hover:text-accent-dark transition-colors ${isActive ? 'text-accent-dark' : 'text-text-secondary'}`
              }
            >
              Chi Siamo
            </NavLink>
            <NavLink 
              to="/schedule"
              className={({ isActive }) => 
                `hover:text-accent-dark transition-colors ${isActive ? 'text-accent-dark' : 'text-text-secondary'}`
              }
            >
              Programma
            </NavLink>
            <NavLink 
              to="/gallery"
              className={({ isActive }) => 
                `hover:text-accent-dark transition-colors ${isActive ? 'text-accent-dark' : 'text-text-secondary'}`
              }
            >
              Foto
            </NavLink>
            <NavLink 
              to="/reservations"
              className={({ isActive }) => 
                `hover:text-accent-dark transition-colors ${isActive ? 'text-accent-dark' : 'text-text-secondary'}`
              }
            >
              Prenotazioni
            </NavLink>
          </div>

          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium hover:text-accent-dark transition-colors ${isActive ? 'text-accent-dark' : 'text-text-secondary'}`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about-us"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium hover:text-accent-dark transition-colors ${isActive ? 'text-accent-dark' : 'text-text-secondary'}`
              }
              onClick={toggleMenu}
            >
              Chi Siamo
            </NavLink>
            <NavLink 
              to="/schedule"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium hover:text-accent-dark transition-colors ${isActive ? 'text-accent-dark' : 'text-text-secondary'}`
              }
              onClick={toggleMenu}
            >
              Programma
            </NavLink>
            <NavLink 
              to="/gallery"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium hover:text-accent-dark transition-colors ${isActive ? 'text-accent-dark' : 'text-text-secondary'}`
              }
              onClick={toggleMenu}
            >
              Foto
            </NavLink>
            <NavLink 
              to="/reservations"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium hover:text-accent-dark transition-colors ${isActive ? 'text-accent-dark' : 'text-text-secondary'}`
              }
              onClick={toggleMenu}
            >
              Prenotazioni
            </NavLink>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;