// src/components/AnatomySection.jsx
import React from 'react';
import HealthStatusCards from './HealthStatusCards';

const AnatomySection = () => {
  return (
    <section className="bg-white shadow rounded-2xl p-4 h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Anatomy Metrics</h2>
      <HealthStatusCards />
      <div className="mt-4 w-full h-52 bg-gray-100 flex items-center justify-center text-gray-400 rounded-xl text-sm">
        {/* Placeholder for Anatomy Visualization */}
        Anatomy Chart Placeholder
      </div>
    </section>
  );
};

export default AnatomySection;
