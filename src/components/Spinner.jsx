const SimpleSpinner = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary bg-opacity-80">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-lg font-medium">Loading...</p>
    </div>
  </div>
);

export default SimpleSpinner



