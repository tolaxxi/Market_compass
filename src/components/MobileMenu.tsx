import { IoCloseOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { close } from '../features/sidebar/sidebarSlice';
import { NavItems } from '../utils/constant';
import { NavLink } from 'react-router-dom';
import { MdShowChart } from 'react-icons/md';

const MobileMenu = () => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <div
      className={`z-30 bg-black/40 h-full w-full lg:hidden absolute  ${isOpen ? 'block' : 'hidden'}`}
      onClick={() => dispatch(close())}
    >
      <aside className="bg-white w-[60%] h-dvh " onClick={(e) => e.stopPropagation()}>
        <div className=" flex items-center justify-between w-full p-3  border-b border-gray">
          <span className="flex items-center gap-2">
            <button className="bg-black p-1.5 text-white text-sm font-medium rounded-lg">
              <MdShowChart />
            </button>
            <h2 className="font-medium">TradeLog</h2>
          </span>
          <button className="" onClick={() => dispatch(close())}>
            <IoCloseOutline />
          </button>
        </div>

        <div className="pt-4 flex flex-col px-3">
          {NavItems.map(({ path, label, icon: Icon }) => {
            return (
              <NavLink to={path} key={label} className="flex gap-2 items-center px-2 py-2 rounded-xl font-medium">
                <Icon />
                {label}
              </NavLink>
            );
          })}
        </div>
      </aside>
    </div>
  );
};
export default MobileMenu;
