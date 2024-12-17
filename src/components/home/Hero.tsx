import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section 
      className="relative h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1 
          className="font-serif text-5xl md:text-7xl mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Simone & Sofia
        </motion.h1>
        <motion.div
          className="text-xl md:text-2xl mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Ci Sposiamo!
        </motion.div>
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>15 Settembre 2024</span>
          </div>
          <div className="hidden md:block">•</div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Villa Bella, Toscana</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;