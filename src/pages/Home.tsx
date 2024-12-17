import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Countdown from '../components/home/Countdown';
import WelcomeSection from '../components/home/WelcomeSection';
import LocationPreview from '../components/home/LocationPreview';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Countdown />
      <WelcomeSection />
      <LocationPreview />
    </motion.div>
  );
};

export default Home;