import React from "react";
import SkeletonLoader from "./components/Loader";

const LayoutSkeletonLoader = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative md:hidden flex items-center justify-between px-4 h-16 w-full bg-white">
        <div className="flex items-center">
          <SkeletonLoader width="40px" height="40px" borderRadius="50%" />
        </div>

        <div className="p-2 border rounded-md flex items-center justify-center">
          <SkeletonLoader width="24px" height="24px" borderRadius="4px" />
        </div>
      </div>

      <header className="hidden md:flex items-center justify-between w-full px-4 py-2 bg-white">
        <div className="flex items-center gap-2">
          <SkeletonLoader width="40px" height="40px" borderRadius="50%" />
          <SkeletonLoader width="100px" height="20px" borderRadius="4px" />
        </div>

        <div className="flex gap-6 justify-center flex-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoader
              key={index}
              width="80px"
              height="20px"
              borderRadius="4px"
            />
          ))}
        </div>
      </header>

      <div className="p-8 flex flex-col space-y-8 bg-slate-100">
        <div>
          <SkeletonLoader width="100%" height="200px" borderRadius="8px" />
        </div>

        <div>
          <SkeletonLoader width="100%" height="200px" borderRadius="8px" />
        </div>

        <div className="hidden md:flex space-x-8">
          {Array.from({ length: 2 }).map((_, index) => (
            <SkeletonLoader
              key={index}
              width="50%"
              height="200px"
              borderRadius="8px"
            />
          ))}
        </div>

        <div>
          <SkeletonLoader width="100%" height="200px" borderRadius="8px" />
        </div>
      </div>
    </div>
  );
};

export default LayoutSkeletonLoader;
