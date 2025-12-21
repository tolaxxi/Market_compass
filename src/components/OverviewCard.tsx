import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';

const OverviewCard = () => {
  // check if sidebar state is open or false
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <div
      className={`border border-gray ${
        isSidebarOpen ? 'w-65' : 'w-70 justify-center'
      } rounded-lg bg-white p-3 flex flex-col gap-5  relative`}
    >
      <div className="flex w-full items-center justify-between">
        <h2 className="text-sm font-medium text-gray-800">Total P&L</h2>

        <button className="bg-indigo-50 px-3 py-1 rounded-lg">$</button>
      </div>

      <div className="flex-col flex gap-1">
        <h2 className="font-medium text-xl">$1223,778</h2>
        <p className="text-xs text-slate-400">Than last week</p>
      </div>
      <button className="absolute border rounded-2xl bg-green-100 px-2 text-xs border-green-600 text-green-600 top-20 right-5">
        ?2.4%
      </button>
    </div>
  );
};
export default OverviewCard;
