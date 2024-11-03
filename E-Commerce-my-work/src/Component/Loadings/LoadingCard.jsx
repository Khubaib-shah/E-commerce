import React from "react";

const LoadingCard = () => {
  
  return (
    <>

      <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 animate-pulse">
        <div className="block relative h-48 rounded-lg overflow-hidden bg-gray-200">
          {/* Placeholder for the image */}
        </div>
        <div className="mt-4">
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>{" "}
          {/* Placeholder for category */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>{" "}
          {/* Placeholder for title */}
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>{" "}
          {/* Placeholder for price */}
        </div>
      </div>
    </>
  );
};

export default LoadingCard;
