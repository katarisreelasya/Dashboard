// src/components/ActivityFeed.jsx
import React from 'react';

const ActivityFeed = () => {
  const activities = [
    { time: '9:00 AM', description: 'User A completed an exercise routine' },
    { time: '11:15 AM', description: 'Doctor B updated a report' },
    { time: '2:30 PM', description: 'User C logged a health metric' },
  ];

  return (
    <section className="bg-white shadow rounded-2xl p-4 h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Activity Feed</h2>
      <ul className="space-y-4">
        {activities.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="text-xs text-gray-500 min-w-[60px]">{item.time}</span>
            <p className="text-sm text-gray-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ActivityFeed;
