import React from "react";

const Shimmer = () => {
   
  return (
    <div className="w-64 bg-white border border-gray-100 shadow-lg rounded-2xl overflow-hidden animate-pulse">
    
      <div className="bg-gray-200 h-52 w-full"></div>

      
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>

        <div className="flex justify-between mt-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>

        <div className="mt-4 h-9 bg-red-100 rounded-lg w-full"></div>
      </div>
    </div>
  );
};

export default Shimmer;
