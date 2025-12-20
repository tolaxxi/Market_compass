import NotificationBtn from './NotificationBtn';
import SearchBar from './SearchBar';
import { useMatches } from 'react-router-dom';

type RouteMatch = {
  handle?: RouteHandle;
};

const Header = () => {
  const matches = useMatches() as RouteMatch[];
  const currentRoute = matches[matches.length - 1];

  const title = currentRoute.handle?.title ?? '';

  return (
    <header className="w-full border-b border-gray h-13 p-2 bg-white sticky top-0 z-10 px-5 flex items-center">
      <div className="flex justify-between w-full items-center">
        <h2 className="text-xl font-medium">{title}</h2>

        {/* search ,notification and profile avatar */}
        <div className="flex items-center gap-3">
          <NotificationBtn />
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
export default Header;
