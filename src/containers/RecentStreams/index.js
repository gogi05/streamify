import { useState, useEffect } from "react";
import useFetchData from "../../hooks/useFetchData";
import { CardLayout } from "../../components/Card";
import SearchBar from "./components/searchBar";
import Pagination from "./components/pagination";
import RecentStreamsTable from "./components/recentStreamsTable";
import { useRevenueContext } from "../../context/revenueStreamContext";
import { useFilteredData } from "./helpers";
import LoadingSpinner from "./components/loadingSpinner";
import ErrorMessage from "./components/error";
import NoDataMessage from "./components/noDataMessage";

const RecentStreams = () => {
  const { selectedRevenueStream } = useRevenueContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    isLoading,
    data = [],
    error,
  } = useFetchData(`${process.env.REACT_APP_API_URL}/recentStreams`);

  const filteredData = useFilteredData(
    data,
    selectedRevenueStream,
    searchQuery
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRevenueStream, searchQuery]);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData.slice(startIndex, endIndex);
  };

  const handlePagination = (newPage) => {
    const totalPages = Math.ceil((filteredData?.length || 0) / pageSize);
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <CardLayout>
      <div className="mb-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      {!isLoading && !error && filteredData.length === 0 && (
        <NoDataMessage
          searchQuery={searchQuery}
          selectedRevenueStream={selectedRevenueStream}
        />
      )}
      {filteredData.length > 0 && (
        <div className="space-y-4">
          <RecentStreamsTable data={getPaginatedData()} />
        </div>
      )}

      {filteredData.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredData.length / pageSize)}
          onPageChange={handlePagination}
          hasMoreData={filteredData.length > currentPage * pageSize}
        />
      )}
    </CardLayout>
  );
};

export default RecentStreams;
