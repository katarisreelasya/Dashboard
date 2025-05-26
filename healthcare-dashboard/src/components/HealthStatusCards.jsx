import React from 'react';

const statusCards = [
  { label: 'Lungs', date: '2025-05-10', status: 'Healthy', color: 'green' },
  { label: 'Teeth', date: '2025-04-20', status: 'Issue Detected', color: 'red' },
  { label: 'Bone', date: '2025-03-18', status: 'Healthy', color: 'green' },
];

const HealthStatusCards = ({ selectedOrgan }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {statusCards.map((card, index) => {
        const isSelected = selectedOrgan === card.label;
        const borderColor = card.color === 'green' ? 'border-green-400' : 'border-red-400';
        const ringColor = card.color === 'green' ? 'ring-green-300' : 'ring-red-300';
        const statusIcon = card.color === 'green' ? '✅' : '⚠️';

        return (
          <div
            key={index}
            className={`rounded-xl p-4 shadow-md border transition-all duration-300 
              ${isSelected ? `bg-white border-blue-500 ring-2 ring-offset-1 ${ringColor}` : `bg-gray-50 ${borderColor}`}
              hover:shadow-lg hover:bg-white`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-800">{card.label}</h3>
              <span className="text-xl">{statusIcon}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Last Checked: {card.date}</p>
            <span
              className={`text-sm font-medium mt-2 inline-block ${
                card.color === 'green' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {card.status}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;
