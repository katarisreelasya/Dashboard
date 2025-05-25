
import React from 'react';

const SimpleAppointmentCard = ({ name, date, status }) => {
  const statusColor = {
    upcoming: 'bg-blue-100 text-blue-600',
    completed: 'bg-green-100 text-green-600',
    canceled: 'bg-red-100 text-red-600',
  };

  return (
    <div className="border rounded-xl p-4 shadow bg-white flex justify-between items-center">
      <div>
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColor[status] || 'bg-gray-100 text-gray-600'}`}>
        {status}
      </span>
    </div>
  );
};

export default SimpleAppointmentCard;
