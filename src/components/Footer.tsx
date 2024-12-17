import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-peach" />
            <span className="font-serif text-lg">Simone & Sofia</span>
          </div>
          <p className="text-text-secondary text-sm text-center">
            Non vediamo l'ora di celebrare il nostro amore con voi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;