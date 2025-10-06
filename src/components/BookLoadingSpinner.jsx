
import React from 'react';

const LoadingSpinner = ({ message = "Loading your books..." }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary bg-opacity-90 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-6 p-8 rounded-2xl bg-white/10 shadow-2xl max-w-sm text-center">
        
       
        <div className="relative w-24 h-24">
         
          <div className="absolute inset-0 bg-secondary rounded-lg shadow-lg transform rotate-[-15deg] animate-bookSpin1"></div>
        
          <div className="absolute inset-0 bg-orange-600 rounded-lg shadow-lg transform rotate-[5deg] animate-bookSpin2"></div>
        
          <div className="absolute inset-0 bg-amber-500 rounded-lg shadow-lg transform rotate-[25deg] animate-bookSpin3"></div>
          
          
          <div className="absolute top-2 left-1/2 w-1 h-4 bg-white/30 rounded-full transform -translate-x-1/2"></div>
          <div className="absolute bottom-2 left-1/2 w-1 h-4 bg-white/30 rounded-full transform -translate-x-1/2"></div>
        </div>

        
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-1">{message}</h3>
          <div className="flex justify-center space-x-1 mt-2">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;