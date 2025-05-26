import React from "react";
import {
  HiHome,
  HiClock,
  HiCalendar,
  HiClipboardList,
  HiChartBar,
  HiBeaker,
  HiChatAlt2,
  HiSupport,
  HiCog,
} from "react-icons/hi";

const generalItems = [
  { label: "Dashboard", icon: <HiHome />, path: "/dashboard" },
  { label: "History", icon: <HiClock />, path: "/history" },
  { label: "Calendar", icon: <HiCalendar />, path: "/calendar" },
  { label: "Appointments", icon: <HiClipboardList />, path: "/appointments" },
  { label: "Statistics", icon: <HiChartBar />, path: "/statistics" },
  { label: "Tests", icon: <HiBeaker />, path: "/tests" }, // Optional: Remove if not needed
];

const toolItems = [
  { label: "Chat", icon: <HiChatAlt2 />, path: "/chat" },
  { label: "Support", icon: <HiSupport />, path: "/support" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md pt-20 fixed top-16 left-0 bottom-0 flex flex-col justify-between">
      <nav className="p-4 space-y-6 overflow-y-auto">
        {/* General Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider">
            General
          </h3>
          <div className="space-y-1">
            {generalItems.map((item) => (
              <a
                href={item.path}
                key={item.label}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 p-2 rounded-md transition text-sm"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wider">
            Tools
          </h3>
          <div className="space-y-1">
            {toolItems.map((item) => (
              <a
                href={item.path}
                key={item.label}
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 p-2 rounded-md transition text-sm"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Settings at Bottom */}
      <div className="p-4 border-t border-gray-100">
        <a
          href="/settings"
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 p-2 rounded-md transition text-sm"
        >
          <HiCog className="text-lg" />
          <span>Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;