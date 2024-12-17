import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heart className="w-8 h-8 text-peach mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-text-primary">
            Benvenuti al Nostro Matrimonio
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Con grande gioia vi invitiamo a celebrare con noi l'inizio del nostro viaggio insieme. 
            Dopo anni di amore, risate e avventure condivise, abbiamo deciso di unire le nostre vite 
            in matrimonio. La vostra presenza renderà questo giorno ancora più speciale.
          </p>
          <div className="font-serif text-xl text-accent-dark">
            Simone & Sofia
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;