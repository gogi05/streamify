const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search by song name or artist"
    className="border rounded px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-primary"
  />
);

export default SearchBar;
