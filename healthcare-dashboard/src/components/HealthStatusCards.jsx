// src/components/HealthStatusCards.jsx
import React from 'react';

const statusCards = [
  { label: 'Heart Rate', value: '76 bpm', status: 'Normal' },
  { label: 'Oxygen Level', value: '98%', status: 'Optimal' },
  { label: 'Blood Pressure', value: '120/80', status: 'Normal' },
];

const HealthStatusCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {statusCards.map((card, index) => (
        <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow">
          <h3 className="text-sm font-medium text-gray-600">{card.label}</h3>
          <p className="text-xl font-bold text-gray-800">{card.value}</p>
          <span className="text-xs text-green-600 font-semibold">{card.status}</span>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
