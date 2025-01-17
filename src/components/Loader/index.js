import React from "react";

const SkeletonLoader = ({ width = "100%", height = "20px" }) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse rounded-lg `}
      style={{ width, height }}
    />
  );
};

export default SkeletonLoader;
