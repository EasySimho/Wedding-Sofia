import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Phone } from 'lucide-react';

const LocationDetails = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="font-serif text-3xl text-accent-dark mb-6">Come Raggiungerci</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-accent-dark mb-2">
                  <MapPin className="w-5 h-5" />
                  <h3 className="font-medium">Indirizzo</h3>
                </div>
                <p className="text-text-secondary">
                  Villa Bella<br />
                  Via dei Cipressi 123<br />
                  50100 Firenze (FI)
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-accent-dark mb-2">
                  <Car className="w-5 h-5" />
                  <h3 className="font-medium">Parcheggio</h3>
                </div>
                <p className="text-text-secondary">
                  Ampio parcheggio gratuito disponibile all'interno della villa.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-accent-dark mb-2">
                  <Phone className="w-5 h-5" />
                  <h3 className="font-medium">Contatti</h3>
                </div>
                <p className="text-text-secondary">
                  Per informazioni: +39 123 456 7890
                </p>
              </div>
            </div>
          </div>
          
          <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Villa Bella entrance" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationDetails;