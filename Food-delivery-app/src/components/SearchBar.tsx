import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search for delicious food..."
        className="w-200 h-15 pl-12 pr-4 rounded-full border border-gray-300 shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
                   transition"
      />
      <IoMdSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  );
};

export default SearchBar;
