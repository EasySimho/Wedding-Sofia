import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="bg-pale-dogwood py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Quote className="w-12 h-12 text-peach mx-auto mb-6 opacity-50" />
          <blockquote className="font-serif text-2xl md:text-3xl text-accent-dark mb-6 leading-relaxed">
            "L'amore non consiste nel guardarsi negli occhi, ma nel guardare insieme nella stessa direzione."
          </blockquote>
          <cite className="text-text-secondary not-italic">
            - Antoine de Saint-Exupéry
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;