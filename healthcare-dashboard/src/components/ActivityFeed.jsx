// src/components/ActivityFeed.jsx
import React from 'react';
import { ActivitySquare } from 'lucide-react';

const ActivityFeed = () => {
  const activities = [
    { time: '9:00 AM', description: 'User A completed an exercise routine' },
    { time: '11:15 AM', description: 'Doctor B updated a report' },
    { time: '2:30 PM', description: 'User C logged a health metric' },
  ];

  const days = [
    { label: 'Mon', value: 20 },
    { label: 'Tue', value: 40 },
    { label: 'Wed', value: 60 },
    { label: 'Thu', value: 35 },
    { label: 'Fri', value: 50 },
    { label: 'Sat', value: 30 },
    { label: 'Sun', value: 45 },
  ];

  return (
    <section className="bg-white shadow-md rounded-2xl p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-4 space-x-2">
          <ActivitySquare className="text-blue-500 w-5 h-5" />
          <h2 className="text-xl font-semibold text-gray-800">Activity</h2>
        </div>
        <p className="text-sm text-gray-500 mb-6">3 appointments this week</p>

        {/* Static bar chart */}
        <div className="flex items-end justify-between h-32 mb-8 px-2">
          {days.map((day, index) => (
            <div key={index} className="flex flex-col items-center space-y-1">
              <div
                className="w-3 rounded-md bg-blue-400 hover:bg-blue-500 transition-all duration-300"
                style={{ height: `${day.value}px` }}
              ></div>
              <span className="text-xs text-gray-500">{day.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Feed List */}
      <ul className="space-y-5">
        {activities.map((item, index) => (
          <li
            key={index}
            className="flex items-start space-x-3 bg-gray-50 rounded-lg p-3 shadow-sm"
          >
            <span className="text-xs font-medium text-gray-500 min-w-[60px]">{item.time}</span>
            <p className="text-sm text-gray-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ActivityFeed;
