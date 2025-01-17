import { useState } from "react";
import { ReactComponent as SortIcon } from "../../assets/sortIcon.svg";
import { TABLE_HEADING, SORT_INITIAL_STATE } from "./constants";

const TableHeaders = ({ onSort, sortConfig }) => (
  <tr>
    {TABLE_HEADING.map(({ key, displayName, sort }) => (
      <th
        key={key}
        className={`${sort ? "cursor-pointer hover:bg-gray-50" : ""} p-2`}
        onClick={() => sort && onSort(key)}
      >
        <div className="flex items-center gap-2">
          {displayName}
          {sort && (
            <div className="flex items-center">
              <SortIcon
                className={`sort-icon transition-transform duration-200 ${
                  sortConfig.key === key
                    ? "text-blue-600" +
                      (sortConfig.direction === "desc" ? " rotate-180" : "")
                    : "text-gray-400"
                }`}
                style={{ width: "16px", height: "16px" }}
              />
            </div>
          )}
        </div>
      </th>
    ))}
  </tr>
);

const RecentStreamsTable = ({ data }) => {
  // Initialize with empty string instead of null to ensure consistent comparison
  const [sortConfig, setSortConfig] = useState(SORT_INITIAL_STATE);

  const handleSort = (key) => {
    setSortConfig((prevSort) => ({
      key,
      direction:
        prevSort.key === key
          ? prevSort.direction === "desc"
            ? "asc"
            : "desc"
          : "desc",
    }));
  };

  const getSortValue = (value, type) => {
    if (value === null || value === undefined) {
      return type === "number" ? -Infinity : "";
    }
    return value;
  };

  const sortedData = [...data].sort((a, b) => {
    // Return early if no sort key is set
    if (!sortConfig.key) {
      return 0;
    }

    // Get values and handle nullish values
    const aValue = getSortValue(a[sortConfig.key], typeof a[sortConfig.key]);
    const bValue = getSortValue(b[sortConfig.key], typeof b[sortConfig.key]);

    // Determine sort order multiplier
    const sortMultiplier = sortConfig.direction === "asc" ? 1 : -1;

    // Handle different data types
    if (sortConfig.key === "date") {
      return sortMultiplier * (new Date(aValue) - new Date(bValue));
    }

    if (sortConfig.key === "streamCount") {
      return sortMultiplier * (Number(aValue) - Number(bValue));
    }

    // Default string comparison
    return sortMultiplier * String(aValue).localeCompare(String(bValue));
  });

  return (
    <table className="min-w-full border-collapse">
      <thead className="bg-gray-50">
        <TableHeaders onSort={handleSort} sortConfig={sortConfig} />
      </thead>
      <tbody>
        {sortedData.map((entry) => (
          <tr key={entry.id} className="hover:bg-gray-50">
            {TABLE_HEADING.map((heading) => (
              <td key={heading.key} className="p-2 border-t">
                {entry[heading.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentStreamsTable;
