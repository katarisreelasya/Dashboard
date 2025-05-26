// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import DashboardMainContent from './components/DashboardMainContent';
import DashboardOverview from './components/DashboardOverview';
import AnatomySection from './components/AnatomySection';
import HealthStatusCards from './components/HealthStatusCards';
import CalendarView from './components/CalendarView';
import UpcomingSchedule from './components/UpcomingSchedule';
import ActivityFeed from './components/ActivityFeed';
import SimpleAppointmentCard from './components/SimpleAppointmentCard';
import Settings from './components/Settings';


const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-6">
            <Routes>
              
              <Route path="/" element={<Navigate to="/dashboard" />} />

              
              <Route path="/dashboard" element={<DashboardMainContent />} />
              <Route path="/overview" element={<DashboardOverview />} />
              <Route path="/anatomy" element={<AnatomySection />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/schedule" element={<UpcomingSchedule />} />
              <Route path="/activity" element={<ActivityFeed />} />
              <Route path="/settings" element={<Settings />} />
              

             
              <Route path="/status-cards" element={<HealthStatusCards />} />
              <Route path="/appointments" element={
                <SimpleAppointmentCard
                  name="Dr. Jane Doe"
                  date="June 1, 2025 at 10:00 AM"
                  status="upcoming"
                />
              } />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
