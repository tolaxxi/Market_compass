import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className="border border-gray p-2  rounded-xl gap-2 flex items-center w-60">
      <IoSearch size={20} />
      <input type="text" placeholder="Search Something" className="flex grow text-sm outline-0" />
    </div>
  );
};
export default SearchBar;
