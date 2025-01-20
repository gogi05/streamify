import { useMemo } from "react";

export const useFilteredData = (data, selectedRevenueStream, searchQuery) => {
  return useMemo(() => {
    if (!data || !Array.isArray(data)) return [];

    let result = data;

    if (selectedRevenueStream) {
      result = result.filter((item) => {
        const sourceNormalized = item.source?.toString().trim().toLowerCase();
        const selectedNormalized = selectedRevenueStream
          .toString()
          .trim()
          .toLowerCase();
        return sourceNormalized === selectedNormalized;
      });
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((item) => {
        const songName = item?.songName?.toString().toLowerCase().trim() || "";
        const song = item?.song?.toString().toLowerCase().trim() || "";
        const artist = item?.artist?.toString().toLowerCase().trim() || "";
        return (
          songName.includes(query) ||
          song.includes(query) ||
          artist.includes(query)
        );
      });
    }

    return result;
  }, [data, selectedRevenueStream, searchQuery]);
};
