import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className="border border-gray p-2  rounded-xl gap-2 flex items-center md:w-60">
      <IoSearch size={20} />
      <input type="text" placeholder="Search Something" className="md:flex grow hidden  text-sm outline-0" />
    </div>
  );
};
export default SearchBar;
