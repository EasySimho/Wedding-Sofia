import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import PhotoGrid from '../components/gallery/PhotoGrid';

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Camera className="w-8 h-8 text-peach mx-auto mb-4" />
            <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
              I Nostri Momenti
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Una raccolta dei momenti più belli della nostra storia d'amore, 
              dai primi incontri fino alla proposta di matrimonio.
            </p>
          </div>

          <PhotoGrid />
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;