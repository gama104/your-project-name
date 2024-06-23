import React from "react";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4 p-4">
      <div className="bg-gray-300 h-4 w-3/4"></div>
      <div className="bg-gray-300 h-4 w-1/2"></div>
      <div className="bg-gray-300 h-4 w-full"></div>
    </div>
  );
};

export default LoadingSkeleton;
