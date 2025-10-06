
import React from 'react';
import { Link } from 'react-router-dom'; 
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-accent px-4">
      <div className="text-center max-w-md">

        <h1 className="text-9xl font-extrabold text-primary drop-shadow-lg">404</h1>

        <h2 className="text-3xl font-bold text-gray-800 mt-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mt-2 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mb-8 text-6xl">📚❌</div>

    
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-md"
          >
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white text-primary border border-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;