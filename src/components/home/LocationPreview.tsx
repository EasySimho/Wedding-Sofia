import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const LocationPreview = () => {
  return (
    <section className="py-20 bg-misty-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-text-primary">
              La Location
            </h2>
            <div className="space-y-4 text-text-secondary mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-peach" />
                <span>Villa Bella, Via dei Cipressi 123, Toscana</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-peach" />
                <span>Cerimonia: 15:30 • Ricevimento: 17:00</span>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Villa Bella è una location incantevole immersa nel cuore della Toscana, 
              circondata da cipressi secolari e vigneti. La sua architettura storica e 
              i suoi giardini mozzafiato creeranno l'atmosfera perfetta per il nostro 
              giorno speciale.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Villa Bella" 
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationPreview;