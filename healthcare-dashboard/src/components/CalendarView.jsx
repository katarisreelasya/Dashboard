import React, { useState } from 'react';
import dayjs from 'dayjs';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import teethIcon from '../assets/icons/clean.png';
import heartIcon from '../assets/icons/heart.png';
import lungsIcon from '../assets/icons/lungs.png';
import boneIcon from '../assets/icons/bones.png';

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [startDay, setStartDay] = useState(0); // Start with day 0 (today)
  
  const appointments = {
    0: { time: "09:00", type: "dentist", doctor: "Dr. Smith" },
    0: { time: "11:00", type: "cardio", doctor: "Dr. Johnson" },
    2: { time: "13:00", type: "pulmonology", doctor: "Dr. Lee" },
    5: { time: "15:00", type: "ortho", doctor: "Dr. Brown" }
  };

  const appointmentTypes = {
    dentist: { icon: teethIcon, color: "bg-blue-100", text: "text-blue-800" },
    cardio: { icon: heartIcon, color: "bg-red-100", text: "text-red-800" },
    pulmonology: { icon: lungsIcon, color: "bg-green-100", text: "text-green-800" },
    ortho: { icon: boneIcon, color: "bg-purple-100", text: "text-purple-800" }
  };

  const visibleDays = Array.from({ length: 3 }, (_, i) => 
    currentDate.add(startDay + i, 'day')
  );

  const handlePrev = () => {
    if (startDay > 0) setStartDay(startDay - 1);
  };

  const handleNext = () => {
    setStartDay(startDay + 1);
  };

  return (
    <section className="bg-white shadow rounded-2xl p-4 h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Calendar</h2>

      {/* Current Date */}
      <div className="text-center text-sm text-gray-600 mb-4">
        {currentDate.format('DD-MMMM-YYYY')}
      </div>

      {/* Day Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={handlePrev}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
          disabled={startDay === 0}
        >
          <HiChevronLeft className="text-gray-600 text-xl" />
        </button>
        
        <div className="grid grid-cols-3 gap-2 flex-1 mx-2">
          {visibleDays.map((day, idx) => {
            const dayIndex = (startDay + idx) % 7;
            const dayAppointments = appointments[dayIndex] ? [appointments[dayIndex]] : [];
            
            return (
              <div
                key={idx}
                className={`bg-gray-50 p-2 rounded-lg flex flex-col items-center justify-start min-h-[100px] border ${
                  day.isSame(currentDate, 'day') ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <span className="font-semibold text-sm">{day.format('ddd')}</span>
                <span className="text-xs text-gray-500">{day.format('DD')}</span>
                
                {dayAppointments.map((appt, tIdx) => {
                  const type = appointmentTypes[appt.type];
                  return (
                    <div
                      key={tIdx}
                      className={`mt-2 text-xs rounded-full p-1 flex items-center ${type.color} ${type.text}`}
                    >
                      <img src={type.icon} alt={appt.type} className="w-4 h-4 mr-1" />
                      <span>{appt.time}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        
        <button 
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <HiChevronRight className="text-gray-600 text-xl" />
        </button>
      </div>

      {/* Upcoming Appointments */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Upcoming Appointments</h3>
        <div className="space-y-2">
          {Object.entries(appointments).map(([dayOffset, appt]) => {
            const apptDate = currentDate.add(dayOffset, 'day');
            const type = appointmentTypes[appt.type];
            
            return (
              <div 
                key={`${dayOffset}-${appt.time}`} 
                className={`${type.color} border ${type.color.replace('100', '200')} rounded-lg p-3`}
              >
                <div className="flex items-center">
                  <img src={type.icon} alt={appt.type} className="w-5 h-5 mr-2" />
                  <div>
                    <p className={`text-sm font-medium ${type.text}`}>
                      {appt.type.charAt(0).toUpperCase() + appt.type.slice(1)} Appointment
                    </p>
                    <p className={`text-xs ${type.text.replace('800', '700')}`}>
                      {appt.time} - {appt.doctor} • {apptDate.format('ddd, MMM D')}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CalendarView;