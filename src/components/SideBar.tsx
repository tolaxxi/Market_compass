import { useState } from 'react';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BiLineChart } from 'react-icons/bi';
import { FiSidebar } from 'react-icons/fi';
import { IoMdBook } from 'react-icons/io';
import { LuSettings } from 'react-icons/lu';
import { MdOutlineDashboard, MdShowChart } from 'react-icons/md';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering((prev) => !prev);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <aside className={`h-dvh border-gray border-r bg-white ${isOpen ? 'w-[20%]' : 'w-12'} sticky top-0`}>
      {/* logo */}
      <div className={`border-b p-2 h-14 flex border-gray ${isOpen ? 'pl-5' : 'justify-center'}`}>
        {/* shows logo or shows collapse icon depending if it is open or not  */}

        <span className="flex items-center justify-between w-full">
          {isHovering && isOpen === false ? (
            <button
              className="text-2xl p-2 text-gray-500"
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsOpen(true)}
            >
              <FiSidebar size={23} />
            </button>
          ) : (
            <span className="gap-2 flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="bg-indigo-400 p-1.5 text-white text-2xl font-medium rounded-lg">
                <MdShowChart />
              </button>
              {/* shows the the logo text when its open only */}
              {isOpen && <h2 className="text-xl font-medium text-gray-800">TradeLog</h2>}
            </span>
          )}
          {/* show collapse icon when open */}
          {isOpen && (
            <span className="sidebar-Buttons text-gray-500" onClick={() => setIsOpen((prev) => !prev)}>
              <FiSidebar size={23} />
            </span>
          )}
        </span>
      </div>

      {/* pages buttons */}
      <div
        className={`flex-col flex ${isOpen ? 'items-start pl-5' : 'items-center'} gap-5 pt-5 text-2xl text-gray-500`}
      >
        <span className="sidebar-Buttons">
          <MdOutlineDashboard size={23} /> {isOpen && <h2>Dashboard</h2>}
        </span>

        <span className="sidebar-Buttons">
          <BiLineChart size={23} /> {isOpen && <h2>Market Watch</h2>}
        </span>

        <span className="sidebar-Buttons">
          <IoMdBook size={23} /> {isOpen && <h2>Trade Journal</h2>}
        </span>
        <span className="sidebar-Buttons">
          <AiOutlineBarChart size={23} /> {isOpen && <h2>Analytics</h2>}
        </span>

        <span className="sidebar-Buttons">
          <LuSettings size={23} /> {isOpen && <h2>settings</h2>}
        </span>
      </div>
    </aside>
  );
};
export default SideBar;
