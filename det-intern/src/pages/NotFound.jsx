import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

/**
 * NotFound Component (404 Page)
 * Friendly error page displayed when a user navigates to an invalid path.
 */
const NotFound = () => {
  return (
    <div className="flex-grow flex items-center justify-center py-20 px-4">
      <Container className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight mb-3">
          Page Not Found
        </h1>

        <p className="text-base text-neutral-600 font-normal leading-relaxed mb-8">
          The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>

        <Link to="/">
          <Button variant="accent" size="lg" className="font-bold shadow-md inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            <span>Return to Homepage</span>
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;
