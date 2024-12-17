import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Torus, Home, Camera, Plane } from 'lucide-react';

const timelineEvents = [
  {
    date: 'Settembre 2018',
    title: 'Il Primo Incontro',
    description: 'Ci siamo conosciuti in un piccolo caffè nel centro di Firenze.',
    icon: Coffee,
  },
  {
    date: 'Marzo 2019',
    title: 'Il Primo Bacio',
    description: 'Sotto le stelle di Piazzale Michelangelo, è scoccata la scintilla.',
    icon: Heart,
  },
  {
    date: 'Giugno 2021',
    title: 'La Convivenza',
    description: 'Abbiamo deciso di iniziare la nostra vita insieme nel nostro primo appartamento.',
    icon: Home,
  },
  {
    date: 'Agosto 2022',
    title: 'Il Viaggio Indimenticabile',
    description: 'Un mese di avventure in giro per l\'Europa che ci ha unito ancora di più.',
    icon: Plane,
  },
  {
    date: 'Dicembre 2023',
    title: 'La Proposta',
    description: 'Marco ha fatto la proposta durante una romantica serata sulla neve.',
    icon: Torus,
  },
];

const StoryTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="space-y-12">
        {timelineEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          const Icon = event.icon;
          
          return (
            <motion.div
              key={event.title}
              className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                <div className="text-accent-dark font-serif">{event.date}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-text-secondary">{event.description}</p>
              </div>
              
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-peach/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-peach" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-peach/20" />
              </div>
              
              <div className="flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StoryTimeline;