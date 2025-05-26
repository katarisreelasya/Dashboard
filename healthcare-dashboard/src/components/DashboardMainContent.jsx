// src/components/DashboardMainContent.jsx
import React from "react";
import {
  FaDollarSign,
  FaUsers,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaUserPlus,
  FaFileExport,
} from "react-icons/fa";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-gray-50 min-h-screen overflow-hidden p-4 pt-20 lg:pt-24">
      
      <div className="flex-1 w-full lg:w-2/3 flex flex-col gap-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Sales</p>
              <h2 className="text-2xl font-bold">$12,348</h2>
              <p className="text-green-600 flex items-center">
                <FaArrowUp className="mr-1" /> +12%
              </p>
            </div>
            <FaDollarSign className="text-3xl text-gray-300" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Users</p>
              <h2 className="text-2xl font-bold">1,254</h2>
              <p className="text-red-500 flex items-center">
                <FaArrowDown className="mr-1" /> -3%
              </p>
            </div>
            <FaUsers className="text-3xl text-gray-300" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Conversion Rate</p>
              <h2 className="text-2xl font-bold">6.7%</h2>
              <p className="text-green-600 flex items-center">
                <FaArrowUp className="mr-1" /> +1.5%
              </p>
            </div>
            <FaChartLine className="text-3xl text-gray-300" />
          </div>
        </div>

        <AnatomySection />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-blue-50 text-sm font-medium transition">
            <FaFileExport className="mr-2 text-gray-500" /> Generate Report
          </button>
          <button className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-blue-50 text-sm font-medium transition">
            <FaUserPlus className="mr-2 text-gray-500" /> Add New User
          </button>
          <button className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-blue-50 text-sm font-medium transition">
            <FaFileExport className="mr-2 text-gray-500" /> Export Data
          </button>
          <button className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-blue-50 text-sm font-medium transition">
            <FaChartLine className="mr-2 text-gray-500" /> View Trends
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-6 mt-6 lg:mt-0 lg:pl-6">
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </div>
  );
};

export default DashboardMainContent;
