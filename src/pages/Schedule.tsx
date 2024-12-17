import React from 'react';
import { motion } from 'framer-motion';
import { Church, GlassWater, Utensils, Music, Camera, Cake } from 'lucide-react';
import TimelineEvent from '../components/schedule/TimelineEvent';
import DressCode from '../components/schedule/DressCode';
import LocationDetails from '../components/schedule/LocationDetails';

const Schedule = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-6">
              Programma della Giornata
            </h1>
            <p className="text-text-secondary text-lg">
              Tutti i dettagli per il nostro giorno speciale
            </p>
          </div>

          <div className="space-y-4">
            <TimelineEvent
              time="15:30"
              title="Cerimonia"
              description="Celebrazione del matrimonio nella cappella della villa"
              icon={<Church className="w-6 h-6 text-peach" />}
            />
            
            <TimelineEvent
              time="17:00"
              title="Aperitivo di Benvenuto"
              description="Cocktail e stuzzichini nel giardino all'italiana"
              icon={<GlassWater className="w-6 h-6 text-peach" />}
            />
            
            <TimelineEvent
              time="18:00"
              title="Servizio Fotografico"
              description="Foto di gruppo e servizio fotografico degli sposi"
              icon={<Camera className="w-6 h-6 text-peach" />}
            />
            
            <TimelineEvent
              time="19:30"
              title="Cena"
              description="Cena servita nella sala principale della villa"
              icon={<Utensils className="w-6 h-6 text-peach" />}
            />
            
            <TimelineEvent
              time="22:00"
              title="Taglio della Torta"
              description="Momento speciale seguito da dolci e spumante"
              icon={<Cake className="w-6 h-6 text-peach" />}
            />
            
            <TimelineEvent
              time="22:30"
              title="Festa e Balli"
              description="Musica e balli fino a tarda notte"
              icon={<Music className="w-6 h-6 text-peach" />}
            />
          </div>
        </div>
      </section>

      <DressCode />
      <LocationDetails />
    </motion.div>
  );
};

export default Schedule;