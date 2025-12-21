import { useState } from 'react';
import { instruments } from '../utils/constant.ts';
import { IoIosArrowDown } from 'react-icons/io';

const InstrumentDropDown = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="relative">
      <div
        className=" dropdown-btn border border-gray justify-between w-15 md:w-25"
        onClick={() => setIsActive((prev) => !prev)}
      >
        forex
        <IoIosArrowDown />
      </div>
      {isActive && (
        <div className="dropdown-menu">
          {instruments.map((instrument) => {
            return <p key={instrument}>{instrument}</p>;
          })}
        </div>
      )}
    </section>
  );
};
export default InstrumentDropDown;
