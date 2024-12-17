import React from 'react';
import { motion } from 'framer-motion';
import useCountdown from '../../hooks/useCountdown';

const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown(new Date('2025-09-15'));

  const countdownItems = [
    { label: 'Giorni', value: days },
    { label: 'Ore', value: hours },
    { label: 'Minuti', value: minutes },
    { label: 'Secondi', value: seconds }
  ];

  return (
    <section className="py-16 bg-champagne-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {countdownItems.map((item, index) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif text-accent-dark mb-2">
                {item.value}
              </span>
              <span className="text-text-secondary">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;