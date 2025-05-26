import React from "react";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-[#f7faff] min-h-screen overflow-hidden p-4 pt-20 lg:pt-24 lg:pl-64 transition-all duration-300 ease-in-out">
      
      {/* Left Section */}
      <div className="flex-1 w-full lg:w-2/3 flex flex-col gap-6">
        <div className="bg-white shadow-md rounded-2xl p-4">
          <AnatomySection />
        </div>

        <div className="bg-white shadow-md rounded-2xl p-4">
          <ActivityFeed />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6 mt-6 lg:mt-0 lg:pl-6">
        <div className="bg-white shadow-md rounded-2xl p-4">
          <CalendarView />
        </div>

        <div className="bg-white shadow-md rounded-2xl p-4">
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
