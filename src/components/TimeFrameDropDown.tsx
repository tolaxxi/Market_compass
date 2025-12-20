import { useState } from 'react';
import { timeFrames } from '../utils/constant';
import { IoIosArrowDown } from 'react-icons/io';

const TimeFrameDropDown = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className=" relative">
      <div
        className="  hover:bg-gray-200 rounded-lg w-25  p-1.5 flex items-center justify-between font-medium text-nowrap"
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        1 month
        <IoIosArrowDown />
      </div>
      {isActive && (
        <div className="dropdown-menu">
          {timeFrames.map((time) => {
            return <p>{time}</p>;
          })}
        </div>
      )}
    </section>
  );
};
export default TimeFrameDropDown;
