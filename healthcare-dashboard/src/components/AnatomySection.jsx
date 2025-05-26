import React, { useState } from 'react';
import HealthStatusCards from './HealthStatusCards';
import humanBodyImage from '../assets/humanbody.png';

const AnatomySection = () => {
  const [selectedOrgan, setSelectedOrgan] = useState(null);

  return (
    <section className="bg-white shadow rounded-2xl p-4 h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Anatomy Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="relative flex justify-center">
          <img src={humanBodyImage} alt="Human Anatomy" className="w-64 md:w-80" />

          {/* Heart Indicator */}
          <div
            onClick={() => setSelectedOrgan('Heart')}
            className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
          >
            <div className={`w-4 h-4 rounded-full border-2 border-white ${
              selectedOrgan === 'Heart' ? 'bg-blue-500 scale-110' : 'bg-green-500'
            } transition-transform duration-200`}></div>
            <span className="text-xs text-gray-700 mt-1 group-hover:underline">Healthy Heart</span>
          </div>

          {/* Lungs Indicator */}
          <div
            onClick={() => setSelectedOrgan('Lungs')}
            className="absolute top-24 left-1/3 flex flex-col items-center cursor-pointer group"
          >
            <div className={`w-4 h-4 rounded-full border-2 border-white ${
              selectedOrgan === 'Lungs' ? 'bg-blue-500 scale-110' : 'bg-green-500'
            } transition-transform duration-200`}></div>
            <span className="text-xs text-gray-700 mt-1 group-hover:underline">Lungs</span>
          </div>

          {/* Teeth Indicator */}
          <div
            onClick={() => setSelectedOrgan('Teeth')}
            className="absolute top-10 right-1/3 flex flex-col items-center cursor-pointer group"
          >
            <div className={`w-4 h-4 rounded-full border-2 border-white ${
              selectedOrgan === 'Teeth' ? 'bg-blue-500 scale-110' : 'bg-red-500'
            } transition-transform duration-200`}></div>
            <span className="text-xs text-gray-700 mt-1 group-hover:underline">Teeth</span>
          </div>

          {/* Bone Indicator */}
          <div
            onClick={() => setSelectedOrgan('Bone')}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
          >
            <div className={`w-4 h-4 rounded-full border-2 border-white ${
              selectedOrgan === 'Bone' ? 'bg-blue-500 scale-110' : 'bg-green-500'
            } transition-transform duration-200`}></div>
            <span className="text-xs text-gray-700 mt-1 group-hover:underline">Bone</span>
          </div>
        </div>

        {/* Right: Health Cards */}
        <HealthStatusCards selectedOrgan={selectedOrgan} />
      </div>
    </section>
  );
};

export default AnatomySection;
