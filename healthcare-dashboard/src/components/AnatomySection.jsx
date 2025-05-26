import React from 'react';
import HealthStatusCards from './HealthStatusCards';
import humanBodyImage from '../assets/human.png';
import { HeartPulse, CheckCircle2, AlertTriangle } from 'lucide-react';

const AnatomySection = () => {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6 h-full max-w-7xl mx-auto">
      <div className="flex items-center mb-6 space-x-2">
        <HeartPulse className="text-red-500 w-6 h-6" />
        <h2 className="text-2xl font-semibold text-gray-900 select-none">Anatomy Metrics</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative flex justify-center">
          <img
            src={humanBodyImage}
            alt="Human Anatomy"
            className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
             </div>

       
        <HealthStatusCards />
      </div>
    </section>
  );
};

export default AnatomySection;
