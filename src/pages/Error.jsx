
import { Link } from 'react-router-dom';

const ErrorPage = ({ errorCode = "Something went wrong", errorMessage = "An unexpected error occurred." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="text-center max-w-lg">
        
    
        <div className="text-7xl mb-4">⚠️</div>
        
   
        <h1 className="text-4xl font-bold text-red-700">{errorCode}</h1>
        <p className="text-gray-700 mt-2 text-lg">{errorMessage}</p>


        <p className="text-gray-500 mt-4 text-sm">
          Please try again later or contact support if the problem persists.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow"
          >
            Return Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="bg-white text-primary border border-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Try Again
          </button>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;

