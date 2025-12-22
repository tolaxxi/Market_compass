import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

type AddTradeDropdownProps = {
  options: string[];
};
const AddTradeDropdown = ({ options }: AddTradeDropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="relative" onClick={() => setIsActive((prev) => !prev)}>
      <div className="flex newTradeInputs justify-between items-center ">
        {options[0]} <IoIosArrowDown />
      </div>
      <div className={` ${isActive ? 'block' : 'hidden'}  border-gray border newTradeDropdownMenu bg-neutral-50`}>
        {options.map((option) => {
          return (
            <p className="text-sm font-light py-1 px-2 hover:bg-indigo-50 hover:font-medium rounded-md" key={option}>
              {option}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default AddTradeDropdown;
