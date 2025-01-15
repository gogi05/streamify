import { useState, useMemo } from "react";
import useFetchData from "../../hooks/useFetchData";
import useDebounce from "../../hooks/useDebounce";
import RecentStreamsTable from "./recentStreamsTable";

const RecentStreams = () => {
  const { isLoading, data, error } = useFetchData(
    "http://localhost:5000/recentStreams"
  );

  const [rawSearchValue, setRawSearchValue] = useState("");

  // Debounced value for search
  const debouncedSearchValue = useDebounce(rawSearchValue, 300);

  const onChangeHandler = (e) => {
    setRawSearchValue(e.target.value);
  };

  const filteredData = useMemo(() => {
    if (isLoading) {
      return null;
    }
    if (error) {
      return [];
    }

    if (!Array.isArray(data)) {
      return [];
    }

    if (!debouncedSearchValue.trim()) {
      return data;
    }

    // Apply filter with debounced value
    const searchTerm = debouncedSearchValue.toLowerCase().trim();

    return data.filter((entry) => {
      const songName = String(entry?.songName || "").toLowerCase();
      const artist = String(entry?.artist || "").toLowerCase();

      return songName.includes(searchTerm) || artist.includes(searchTerm);
    });
  }, [data, debouncedSearchValue, isLoading, error]);

  return (
    <div className="p-4">
      <input
        className="w-full sm:w-80 p-2 mb-4 border rounded"
        placeholder="Search for the song or artist name here"
        value={rawSearchValue}
        onChange={onChangeHandler}
      />

      {isLoading && <div>Loading Data...</div>}
      {error && <div>An error occurred while fetching data.</div>}

      {!isLoading && !error && (
        <>
          {filteredData && filteredData.length > 0 ? (
            <RecentStreamsTable data={filteredData} />
          ) : (
            <div>No results found</div>
          )}
        </>
      )}
    </div>
  );
};

export default RecentStreams;
