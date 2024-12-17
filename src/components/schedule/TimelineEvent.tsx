import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface TimelineEventProps {
  time: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ time, title, description, icon }) => {
  return (
    <motion.div 
      className="flex gap-4 items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-shrink-0 w-20 pt-1">
        <div className="flex items-center gap-1 text-accent-dark">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{time}</span>
        </div>
      </div>
      
      <div className="flex-grow pb-8 relative">
        <div className="absolute left-0 top-2 -ml-[35px] w-3 h-3 bg-peach rounded-full" />
        <div className="absolute left-0 top-2 -ml-[35px] w-3 h-3 bg-peach/30 rounded-full animate-ping" />
        <div className="absolute left-0 top-5 -ml-[34px] w-0.5 h-full bg-peach/20" />
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-3">
            {icon}
            <h3 className="font-serif text-xl text-accent-dark">{title}</h3>
          </div>
          <p className="text-text-secondary">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineEvent;