import React, { createContext, useState, useContext, useCallback } from "react";

// Create context for managing selected revenue stream
const RevenueContext = createContext();

export const useRevenueContext = () => useContext(RevenueContext);

export const RevenueContextProvider = ({ children }) => {
  const [selectedRevenueStream, setSelectedRevenueStream] = useState(null);

  const selectRevenueStream = useCallback((stream) => {
    setSelectedRevenueStream(stream);
  }, []);

  return (
    <RevenueContext.Provider
      value={{ selectedRevenueStream, selectRevenueStream }}
    >
      {children}
    </RevenueContext.Provider>
  );
};
