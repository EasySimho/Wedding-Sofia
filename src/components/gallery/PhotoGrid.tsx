import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  caption: string;
}

const photos: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    caption: "Il nostro primo viaggio insieme"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    caption: "La proposta a Parigi"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac",
    caption: "Estate in Toscana"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
    caption: "Il nostro primo appartamento"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
    caption: "Passeggiata al tramonto"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637",
    caption: "Viaggio in Grecia"
  }
];

const PhotoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative aspect-square rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={`${photo.url}?auto=format&fit=crop&w=800&q=80`}
            alt={photo.caption}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <p className="text-sm">{photo.caption}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGrid;