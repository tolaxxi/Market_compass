import { useState } from 'react';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BiLineChart } from 'react-icons/bi';
import { FiSidebar } from 'react-icons/fi';
import { IoMdBook } from 'react-icons/io';
import { LuSettings } from 'react-icons/lu';
import { MdOutlineDashboard, MdShowChart } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { open, close } from '../features/sidebar/sidebarSlice';

const SideBar = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  // function to show/ hide collapse icon to show if mouse is in or out of the logo
  const handleMouseEnter = () => {
    setIsHovering((prev) => !prev);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <aside className={`h-dvh border-gray border-r ${isOpen ? 'w-[20%]' : 'w-14'} sticky top-0 bg-white`}>
      {/* logo */}
      <div className={`border-b p-2 h-13 flex border-gray ${isOpen ? 'px-6' : 'justify-center'}`}>
        {/* shows logo or shows collapse icon depending if it is open or not  */}

        <span className="flex items-center justify-between w-full">
          {isHovering && isOpen === false ? (
            <button
              className="text-2xl p-2 text-gray-500"
              onMouseLeave={handleMouseLeave}
              onClick={() => dispatch(open())}
            >
              <FiSidebar size={23} />
            </button>
          ) : (
            <span
              className="gap-2 flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if (!isOpen) return;
                navigate('/dashboard');
              }}
            >
              <button className="bg-black p-1.5 text-white text-2xl font-medium rounded-lg">
                <MdShowChart />
              </button>
              {/* shows the the logo text when its open only */}
              {isOpen && <h2 className="text-xl font-medium text-gray-800">TradeLog</h2>}
            </span>
          )}
          {/* show collapse icon when open */}
          {isOpen && (
            <span className="flex items-center gap-3 text-gray-500" onClick={() => dispatch(close())}>
              <FiSidebar size={23} />
            </span>
          )}
        </span>
      </div>

      {/* pages buttons */}
      <div
        className={`flex-col flex ${isOpen ? 'items-start px-4 ' : 'items-center '} pt-3 px-4  text-2xl text-gray-500`}
      >
        <NavLink
          to="/dashboard"
          className={`sidebar-Buttons ${isOpen && 'sidebar-Buttons-open'} sidebar-Buttons-hover`}
        >
          <MdOutlineDashboard size={23} /> {isOpen && <h2 className="side-buttons-text">Dashboard</h2>}
        </NavLink>

        <NavLink
          to="/market watch"
          className={`sidebar-Buttons ${isOpen && 'sidebar-Buttons-open'} sidebar-Buttons-hover`}
        >
          <BiLineChart size={23} /> {isOpen && <h2 className="side-buttons-text">Market Watch</h2>}
        </NavLink>

        <NavLink
          to="/trade journal"
          className={`sidebar-Buttons ${isOpen && 'sidebar-Buttons-open'} sidebar-Buttons-hover`}
        >
          <IoMdBook size={23} /> {isOpen && <h2 className="side-buttons-text">Trade Journal</h2>}
        </NavLink>
        <NavLink
          to="/analytics"
          className={`sidebar-Buttons ${isOpen && 'sidebar-Buttons-open'} sidebar-Buttons-hover`}
        >
          <AiOutlineBarChart size={23} /> {isOpen && <h2 className="side-buttons-text">Analytics</h2>}
        </NavLink>

        <NavLink to="/settings" className={`sidebar-Buttons ${isOpen && 'sidebar-Buttons-open'} sidebar-Buttons-hover`}>
          <LuSettings size={23} /> {isOpen && <h2 className="side-buttons-text">settings</h2>}
        </NavLink>
      </div>
    </aside>
  );
};
export default SideBar;
