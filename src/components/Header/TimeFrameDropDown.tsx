import { useState } from 'react';
import { timeFrames } from '../../utils/constant';
import { IoIosArrowDown } from 'react-icons/io';

const TimeFrameDropDown = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className=" relative">
      <div
        className="  hover:bg-gray-200 w-15 dropdown-btn font-medium"
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        1M
        <IoIosArrowDown />
      </div>
      {isActive && (
        <div className="dropdown-menu">
          {timeFrames.map(({ label, symbol }) => {
            return <p key={symbol}>{label}</p>;
          })}
        </div>
      )}
    </section>
  );
};
export default TimeFrameDropDown;
