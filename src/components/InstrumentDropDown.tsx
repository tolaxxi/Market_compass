import { useState } from 'react';
import { instruments } from '../utils/constant.ts';
import { IoIosArrowDown } from 'react-icons/io';

const InstrumentDropDown = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="relative">
      <div
        className=" rounded-lg border border-gray w-25 p-1.5 flex items-center justify-between font-medium"
        onClick={() => setIsActive((prev) => !prev)}
      >
        forex
        <IoIosArrowDown />
      </div>
      {isActive && (
        <div className="dropdown-menu">
          {instruments.map((instrument) => {
            return <p>{instrument}</p>;
          })}
        </div>
      )}
    </section>
  );
};
export default InstrumentDropDown;
