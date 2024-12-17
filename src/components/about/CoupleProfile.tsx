import React from 'react';
import { motion } from 'framer-motion';

interface ProfileProps {
  name: string;
  image: string;
  description: string;
  hobbies: string[];
  isReversed?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ name, image, description, hobbies, isReversed }) => {
  return (
    <motion.div 
      className={`flex flex-col md:flex-row items-center gap-8 ${isReversed ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full md:w-1/2">
        <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="font-serif text-2xl text-accent-dark">{name}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
        <div>
          <h4 className="font-semibold mb-2">Passioni:</h4>
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby) => (
              <span 
                key={hobby}
                className="px-3 py-1 bg-champagne-pink rounded-full text-sm text-accent-dark"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoupleProfile = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      <Profile 
        name="Sofia Turcato"
        image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        description="Sara è una fotografa freelance con una passione per i viaggi e l'arte. Il suo spirito creativo e la sua energia contagiosa illuminano ogni stanza in cui entra. Ama scoprire nuovi luoghi, immortalare momenti speciali e creare ricordi indimenticabili."
        hobbies={['Fotografia', 'Viaggi', 'Arte', 'Yoga', 'Cucina']}
      />
      
      <Profile 
        name="Simone Benanchietti"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        description="Marco è un architetto con un amore per il design e la natura. La sua attenzione ai dettagli e la sua passione per la sostenibilità si riflettono in ogni suo progetto. Nel tempo libero, ama esplorare sentieri di montagna e suonare la chitarra."
        hobbies={['Architettura', 'Musica', 'Trekking', 'Lettura', 'Giardinaggio']}
        isReversed
      />
    </div>
  );
};

export default CoupleProfile;