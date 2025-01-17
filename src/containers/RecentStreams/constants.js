export const TABLE_HEADING = [
  { key: "userId", displayName: "ID", sort: false },
  { key: "songName", displayName: "Song Name", sort: false },
  { key: "artist", displayName: "Artist", sort: false },
  { key: "dateStreamed", displayName: "Date Streamed", sort: true },
  { key: "streamCount", displayName: "Streams", sort: true },
];

export const SORT_INITIAL_STATE = {
  key: "",
  direction: "desc",
};
