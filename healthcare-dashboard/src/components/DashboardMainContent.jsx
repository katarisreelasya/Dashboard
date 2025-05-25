

import React from 'react';
import DashboardOverview from './DashboardOverview';

const DashboardMainContent = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Welcome back, Admin
        </h1>
        <p className="text-sm text-gray-500">Here’s what’s happening today</p>
      </div>
      <DashboardOverview />
    </div>
  );
};

export default DashboardMainContent;
