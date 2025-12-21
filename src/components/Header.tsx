import InstrumentDropDown from './InstrumentDropDown';
import NotificationBtn from './NotificationBtn';
import SearchBar from './SearchBar';
import { useMatches } from 'react-router-dom';
import TimeFrameDropDown from './TimeFrameDropDown';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import { open } from '../features/sidebar/sidebarSlice';

type AppRouteHandle = {
  title?: string;
};

const Header = () => {
  const matches = useMatches() as { handle?: AppRouteHandle }[];

  const title = matches.at(-1)?.handle?.title ?? 'App';

  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  const dispatch = useDispatch();
  return (
    <header className="w-full border-b border-gray h-13 px-2 py-2 md:px-10 bg-white sticky top-0 z-10  flex items-center">
      <div className="flex justify-between w-full gap-5 items-center">
        <h2 className="text-xl font-medium hidden lg:block">{title}</h2>

        <button className="block lg:hidden" onClick={() => dispatch(open())}>
          <RxHamburgerMenu />
        </button>

        {/* search ,notification and profile avatar */}
        <div className="flex items-center gap-3">
          {/* <button className="bg-indigo-100 rounded-full w-9 h-9 uppercase">Jd</button> */}
          <NotificationBtn />
          <SearchBar />
          <InstrumentDropDown />
          <TimeFrameDropDown />
        </div>
      </div>
    </header>
  );
};
export default Header;
