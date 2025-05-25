import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const links = [
    { name: 'Overview', path: '/' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'Activity Feed', path: '/activity' },
  ];

  return (
    <aside className="bg-white shadow h-full p-4 rounded-r-2xl w-64">
      <nav className="flex flex-col space-y-3">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Navigation</h2>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium ${
                isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
