import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const DressCode = () => {
  return (
    <section className="py-16 bg-champagne-pink">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-8 h-8 text-peach mx-auto mb-4" />
          <h2 className="font-serif text-3xl text-accent-dark mb-6">Dress Code</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-text-secondary leading-relaxed mb-6">
              Per rendere questa giornata ancora più speciale, vi chiediamo gentilmente di seguire il nostro dress code:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-serif text-xl text-accent-dark mb-3">Signore</h3>
                <p className="text-text-secondary">
                  Abiti lunghi o midi in tonalità pastello. 
                  Evitare il bianco, riservato alla sposa.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-accent-dark mb-3">Signori</h3>
                <p className="text-text-secondary">
                  Completo elegante in colori neutri o blu.
                  Cravatta o papillon a scelta.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DressCode;