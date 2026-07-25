import React from 'react';

/**
 * Placeholder Home Page
 * Displays project title and redesign notice centered on the screen.
 */
const Home = () => {
  return (
    <div className="flex-grow flex items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
          Excellence International School
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 font-medium">
          Modern website redesign in progress.
        </p>
      </div>
    </div>
  );
};

export default Home;
