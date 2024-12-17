import React from 'react';
import { motion } from 'framer-motion';
import CoupleProfile from '../components/about/CoupleProfile';
import StoryTimeline from '../components/about/StoryTimeline';
import QuoteSection from '../components/about/QuoteSection';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16 overflow-hidden"

    >
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
            La Nostra Storia
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Ogni grande amore ha una bella storia da raccontare. Questa è la nostra.
          </p>
        </div>
      </section>

      <CoupleProfile />
      <QuoteSection />
      <StoryTimeline />
    </motion.div>
  );
};

export default AboutUs;