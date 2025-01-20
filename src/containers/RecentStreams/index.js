import { useState, useEffect, useMemo } from "react";
import useFetchData from "../../hooks/useFetchData";
import { CardLayout } from "../../components/Card";
import RecentStreamsTable from "./recentStreamsTable";
import { useRevenueContext } from "../../context/revenueStreamContext";

const RecentStreams = () => {
  const { selectedRevenueStream } = useRevenueContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    isLoading,
    data = [],
    error,
  } = useFetchData("http://localhost:5000/recentStreams");

  // Improved search handler with debounce
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Enhanced filtering logic
  const filteredData = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];

    let result = data;

    // Filter by revenue stream if selected
    if (selectedRevenueStream) {
      result = result.filter((item) => {
        if (!item?.source) return false;
        const sourceNormalized = item.source.toString().trim().toLowerCase();
        const selectedNormalized = selectedRevenueStream
          .toString()
          .trim()
          .toLowerCase();
        return sourceNormalized === selectedNormalized;
      });
    }

    // Filter by search query if present
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((item) => {
        // Safely access and normalize properties
        const songName = item?.songName?.toString().toLowerCase().trim() || "";
        const song = item?.song?.toString().toLowerCase().trim() || "";
        const artist = item?.artist?.toString().toLowerCase().trim() || "";

        // Check all possible fields for the search term
        return (
          songName.includes(query) ||
          song.includes(query) ||
          artist.includes(query)
        );
      });
    }

    return result;
  }, [data, selectedRevenueStream, searchQuery]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRevenueStream, searchQuery]);

  // Update pagination status
  useEffect(() => {
    const totalPages = Math.ceil((filteredData?.length || 0) / pageSize);
    setHasMoreData(currentPage < totalPages);
  }, [filteredData, currentPage, pageSize]);

  // Get paginated data
  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData.slice(startIndex, endIndex);
  };

  // Handle pagination
  const handlePagination = (newPage) => {
    const totalPages = Math.ceil((filteredData?.length || 0) / pageSize);
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Render content with improved error handling
  const renderContent = () => {
    if (isLoading) {
      return <div className="text-center p-4">Loading Data...</div>;
    }

    if (error) {
      return (
        <div className="text-center p-4 text-red-500">
          An error occurred while fetching data.
        </div>
      );
    }

    if (!filteredData || filteredData.length === 0) {
      return (
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
    }

    return (
      <div className="space-y-4">
        <RecentStreamsTable data={getPaginatedData()} />
      </div>
    );
  };

  return (
    <CardLayout>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by song name or artist"
          className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {renderContent()}

      {filteredData && filteredData.length > 0 && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {Math.ceil(filteredData.length / pageSize)}
          </span>
          <button
            onClick={() => handlePagination(currentPage + 1)}
            disabled={!hasMoreData}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      )}
    </CardLayout>
  );
};

export default RecentStreams;
