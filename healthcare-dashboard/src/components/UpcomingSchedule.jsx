// src/components/UpcomingSchedule.jsx
import React from 'react';

const SimpleAppointmentCard = ({ task, time }) => (
  <div className="bg-gray-50 p-3 rounded-xl shadow-sm flex items-center justify-between">
    <span className="text-sm text-gray-700 font-medium">{task}</span>
    <span className="text-xs text-gray-500">{time}</span>
  </div>
);

const UpcomingSchedule = () => {
  const groupedSchedule = {
    Thursday: [
      { time: '10:00 AM', task: 'Team Standup Meeting' },
      { time: '1:00 PM', task: 'Doctor Appointment' },
    ],
    Saturday: [
      { time: '3:30 PM', task: 'Code Review' },
      { time: '5:00 PM', task: 'Client Presentation' },
    ],
  };

  return (
    <section className="bg-white shadow rounded-2xl p-4 h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">The Upcoming Schedule</h2>
      {Object.entries(groupedSchedule).map(([day, appointments]) => (
        <div key={day} className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">On {day}</h3>
          <div className="space-y-2">
            {appointments.map(({ task, time }, index) => (
              <SimpleAppointmentCard key={index} task={task} time={time} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpcomingSchedule;
