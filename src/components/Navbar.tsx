import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Navbar = () => {
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;