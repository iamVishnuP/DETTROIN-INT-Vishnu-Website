import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';

/**
 * Header Component
 * Combines Top Information Bar and Main Navigation Header.
 */
const Header = () => {
  return (
    <div className="w-full flex flex-col">
      <TopBar />
      <Navbar />
    </div>
  );
};

export default Header;
