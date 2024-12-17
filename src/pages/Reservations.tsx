import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import ReservationForm from '../components/reservations/ReservationForm';

const Reservations = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <CalendarCheck className="w-8 h-8 text-peach mx-auto mb-4" />
            <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
              Conferma la tua Presenza
            </h1>
            <p className="text-text-secondary text-lg">
              Siamo felici di averti con noi in questo giorno speciale. 
              Per favore, conferma la tua presenza compilando il modulo sottostante.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <ReservationForm />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Reservations;