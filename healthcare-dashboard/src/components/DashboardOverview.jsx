// src/components/DashboardOverview.jsx
import React from 'react';
import { FaCalendarAlt, FaClipboardCheck, FaClock } from 'react-icons/fa';

const overviewStats = [
  {
    title: 'Total Appointments',
    value: 128,
    icon: <FaCalendarAlt className="text-blue-500 text-2xl" />,
    bg: 'bg-blue-50',
  },
  {
    title: 'Completed Visits',
    value: 92,
    icon: <FaClipboardCheck className="text-green-500 text-2xl" />,
    bg: 'bg-green-50',
  },
  {
    title: 'Pending Approvals',
    value: 12,
    icon: <FaClock className="text-yellow-500 text-2xl" />,
    bg: 'bg-yellow-50',
  },
];

const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {overviewStats.map(({ title, value, icon, bg }, index) => (
        <div
          key={index}
          className={`flex items-center p-5 rounded-2xl shadow-md ${bg}`}
        >
          <div className="mr-4">{icon}</div>
          <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-xl font-semibold text-gray-800">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;
