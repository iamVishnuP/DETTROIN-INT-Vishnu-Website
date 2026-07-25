import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Main Layout Component
 * Serves as the wrapper for all pages.
 * Navbar and Footer placeholders will be integrated here in future commits.
 */
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-800 font-body">
      {/* Future Navbar will be placed here */}
      
      <main className="flex-grow flex flex-col">
        {children || <Outlet />}
      </main>

      {/* Future Footer will be placed here */}
    </div>
  );
};

export default MainLayout;
