const WatchlistCard = () => {
  return (
    <div className="border border-gray w-60 rounded-lg p-3 bg-white flex flex-col gap-3">
      <div className="">
        <h2 className="uppercase font-medium text-lg text-gray-800">eurusd</h2>
        <p className="text-xs text-slate-400">Euro/ US Dollar</p>
      </div>

      <div className="">
        <h2 className="font-bold text-2xl">1.0872</h2>

        <div className="flex gap-2 items-center">
          <p className="text-green-500 text-sm">+0.23%</p>
          <p className="text-xs capitalize text-slate-400">london</p>
        </div>
      </div>
    </div>
  );
};
export default WatchlistCard;
