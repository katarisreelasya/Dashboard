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
    <div className="flex flex-col lg:flex-row w-full bg-gray-50 min-h-screen overflow-hidden p-4 pt-20 lg:pt-24 pl-64">
      
      <div className="flex-1 w-full lg:w-2/3 flex flex-col gap-6">
        

        <AnatomySection />

        <ActivityFeed />
        
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-6 mt-6 lg:mt-0 lg:pl-6">
        <CalendarView />
        <UpcomingSchedule />
        
      </div>
    </div>
  );
};

export default DashboardMainContent;
