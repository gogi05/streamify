import { useState, useEffect, useMemo } from "react";
import useFetchData from "../../hooks/useFetchData"; // Keep this hook as is
import { CardLayout } from "../../components/Card";
import useDebounce from "../../hooks/useDebounce";
import RecentStreamsTable from "./recentStreamsTable"; // Ensure your table component is set up correctly

const RecentStreams = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [rawSearchValue, setRawSearchValue] = useState("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");
  const [hasMoreData, setHasMoreData] = useState(true);

  // Debounce the search input
  const debouncedSearch = useDebounce((value) => {
    setDebouncedSearchValue(value);
    setCurrentPage(1); // Reset to first page when search changes
  }, 300);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setRawSearchValue(value);
    debouncedSearch(value);
  };

  // Fetch data using the generic hook
  const {
    isLoading,
    data = [],
    error,
  } = useFetchData("http://localhost:5000/recentStreams");

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return data.filter(
      (item) =>
        item.artist
          ?.toLowerCase()
          .includes(debouncedSearchValue.toLowerCase()) ||
        item.song?.toLowerCase().includes(debouncedSearchValue.toLowerCase())
    );
  }, [data, debouncedSearchValue]);

  // Check if there's more data based on the filtered dataset
  useEffect(() => {
    setHasMoreData(filteredData.length > currentPage * pageSize);
  }, [filteredData, currentPage, pageSize]);

  // Handle pagination
  const handlePagination = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(filteredData.length / pageSize)) {
      setCurrentPage(newPage);
    }
  };

  // Render content
  const renderContent = () => {
    if (isLoading) {
      return <div>Loading Data...</div>;
    }

    if (error) {
      return <div>An error occurred while fetching data.</div>;
    }

    if (filteredData.length === 0) {
      return <div>No results found</div>;
    }

    const paginatedData = filteredData.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    return (
      <div>
        <RecentStreamsTable data={paginatedData} />
      </div>
    );
  };

  return (
    <CardLayout>
      <input
        type="text"
        value={rawSearchValue}
        onChange={onChangeHandler}
        placeholder="Search streams..."
        className="mb-4 p-2 border rounded w-full md:w-1/3"
      />

      {renderContent()}

      {/* Pagination controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePagination(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>

        <span className="flex items-center">Page {currentPage}</span>

        <button
          onClick={() => handlePagination(currentPage + 1)}
          disabled={!hasMoreData}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </CardLayout>
  );
};

export default RecentStreams;
