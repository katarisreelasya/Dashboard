// src/components/UpcomingSchedule.jsx
import React from 'react';

const UpcomingSchedule = () => {
  const schedule = [
    { time: '10:00 AM', task: 'Team Standup Meeting' },
    { time: '1:00 PM', task: 'Doctor Appointment' },
    { time: '3:30 PM', task: 'Code Review' },
  ];

  return (
    <section className="bg-white shadow rounded-2xl p-4 h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Schedule</h2>
      <ul className="space-y-3">
        {schedule.map((item, index) => (
          <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <span className="text-sm text-gray-600">{item.task}</span>
            <span className="text-xs text-gray-500">{item.time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingSchedule;
