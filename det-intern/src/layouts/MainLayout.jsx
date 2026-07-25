import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

/**
 * Main Layout Component
 * Integrates Top Bar and Sticky Header Navigation around page content.
 */
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-800 font-body">
      {/* Header System (TopBar + Navbar) */}
      <Header />
      
      {/* Dynamic Page Content */}
      <main className="flex-grow flex flex-col">
        {children || <Outlet />}
      </main>

      {/* Future Footer will be added in upcoming commits */}
    </div>
  );
};

export default MainLayout;
