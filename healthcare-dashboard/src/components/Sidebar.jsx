import React, { useState } from "react";
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
  HiMenu,
  HiX,
} from "react-icons/hi";

// Menu Data
const generalItems = [
  { label: "Dashboard", icon: <HiHome />, path: "/dashboard" },
  { label: "History", icon: <HiClock />, path: "/history" },
  { label: "Calendar", icon: <HiCalendar />, path: "/calendar" },
  { label: "Appointments", icon: <HiClipboardList />, path: "/appointments" },
  { label: "Statistics", icon: <HiChartBar />, path: "/statistics" },
  { label: "Tests", icon: <HiBeaker />, path: "/tests" },
];

const toolItems = [
  { label: "Chat", icon: <HiChatAlt2 />, path: "/chat" },
  { label: "Support", icon: <HiSupport />, path: "/support" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const renderMenuItems = (items) =>
    items.map((item) => (
      <a
        href={item.path}
        key={item.label}
        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-[#f1f7fe] p-2 rounded-lg transition-all text-[15px] font-medium"
      >
        <span className="text-xl">{item.icon}</span>
        <span>{item.label}</span>
      </a>
    ));

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          className="text-gray-700 bg-white p-2 rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed top-0 left-0 z-40 h-full w-64 bg-white shadow-xl pt-16 flex flex-col justify-between transition-transform duration-300 ease-in-out`}
      >
        {/* Navigation */}
        <nav className="p-6 space-y-10 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-100">
          {/* General Section */}
          <div>
            <h3 className="text-[11px] font-semibold text-gray-400 uppercase mb-3 tracking-widest">
              General
            </h3>
            <div className="space-y-2">{renderMenuItems(generalItems)}</div>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="text-[11px] font-semibold text-gray-400 uppercase mb-3 tracking-widest">
              Tools
            </h3>
            <div className="space-y-2">{renderMenuItems(toolItems)}</div>
          </div>
        </nav>

        {/* Settings Link */}
        <div className="p-6 border-t border-gray-100">
          <a
            href="/settings"
            className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-[#f1f7fe] p-2 rounded-lg transition-all text-[15px] font-medium"
          >
            <HiCog className="text-xl" />
            <span>Settings</span>
          </a>
        </div>
      </aside>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
