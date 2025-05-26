import React from 'react';

const statusCards = [
  { label: 'Lungs', date: '2025-05-10', status: 'Healthy', color: 'green' },
  { label: 'Teeth', date: '2025-04-20', status: 'Issue Detected', color: 'red' },
  { label: 'Bone', date: '2025-03-18', status: 'Healthy', color: 'green' },
];

const HealthStatusCards = ({ selectedOrgan }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {statusCards.map((card, index) => {
        const isSelected = selectedOrgan === card.label;
        return (
          <div
            key={index}
            className={`rounded-xl p-4 shadow border transition-all duration-300 ${
              isSelected
                ? 'bg-white border-blue-500 ring-2 ring-blue-300'
                : 'bg-blue-50 border-blue-200'
            }`}
          >
            <h3 className="text-sm font-medium text-gray-600">{card.label}</h3>
            <p className="text-xs text-gray-500">Last Checked: {card.date}</p>
            <span
              className={`text-sm font-semibold mt-2 inline-block ${
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
