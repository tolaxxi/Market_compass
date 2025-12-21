import { useState } from 'react';
import { timeFrames } from '../utils/constant';
import { IoIosArrowDown } from 'react-icons/io';

const TimeFrameDropDown = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className=" relative">
      <div
        className="  hover:bg-gray-200 w-15 dropdown-btn"
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        1M
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
