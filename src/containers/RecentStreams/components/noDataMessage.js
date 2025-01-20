const NoDataMessage = ({ searchQuery, selectedRevenueStream }) => (
  <div className="text-center p-4">
    {searchQuery && selectedRevenueStream
      ? `No results found for "${searchQuery}" in ${selectedRevenueStream}`
      : searchQuery
      ? `No results found for "${searchQuery}"`
      : selectedRevenueStream
      ? `No data found for revenue stream: ${selectedRevenueStream}`
      : "No data available"}
  </div>
);

export default NoDataMessage;
