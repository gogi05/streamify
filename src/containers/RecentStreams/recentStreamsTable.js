import { useCallback } from "react";
import { ReactComponent as SortIcon } from "../../assets/sortIcon.svg";
import { TABLE_HEADING } from "./constants";

const RecentStreamsTable = ({ data }) => {
  const onSortClick = useCallback(() => {}, []);

  return (
    <table>
      <thead>
        <tr>
          {TABLE_HEADING.map((heading) => {
            const { key, displayName, sort } = heading;
            return (
              <th
                key={key}
                className={`${sort && "cursor-pointer"}`}
                onClick={onSortClick}
              >
                {displayName}{" "}
                {sort && <SortIcon style={{ width: "16px", height: "16px" }} />}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => {
          return (
            <tr key={entry.id}>
              {TABLE_HEADING.map((heading) => (
                <td key={heading.key}>{entry[heading.key]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RecentStreamsTable;
