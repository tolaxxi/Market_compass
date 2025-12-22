import { IoCloseOutline } from 'react-icons/io5';
import AddTradeDropdown from './AddTradeDropdown';
import { direction, results } from '../../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import { close } from '../../features/TradingJournal/addTradePopSlice';

const AddTrade = () => {
  const isOpen = useSelector((state: RootState) => state.addTrade.isOpen);
  const dispatch = useDispatch();

  return (
    // overlay
    <section
      className={`w-full h-full  ${
        isOpen ? 'block' : 'hidden'
      } flex justify-center items-center z-60 bg-black/40 absolute`}
      onClick={() => dispatch(close())}
    >
      {/* popup */}
      <div
        className="w-[35%] bg-white relative rounded-2xl p-6 flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button className=" absolute right-6 top-7" onClick={() => dispatch(close())}>
          <IoCloseOutline size={22} />
        </button>
        <div className="">
          <h2 className="capitalize text-lg font-medium text-gray-900">Add New Trade</h2>
          <p className="text-sm text-slate-500">Log your trade details to track performance</p>
        </div>
        <section className="flex flex-col gap-5">
          {/* symbol and direction */}
          <div className="addTradeInputSections">
            <div className="">
              <h2>Market/Symbol</h2>
              <input type="text" placeholder="XAUUSD" className="newTradeInputs" />
            </div>
            <div className="">
              <h2>direction</h2>
              <AddTradeDropdown options={direction} />
            </div>
          </div>
          {/* entry and exit price */}
          <div className="addTradeInputSections">
            <div className="">
              <h2>entry</h2>
              <input type="text" placeholder="0.00" className="newTradeInputs" />
            </div>
            <div className="">
              <h2>exit price</h2>
              <input type="text" placeholder="0.00" className="newTradeInputs" />
            </div>
          </div>

          {/* RR and result */}
          <div className="addTradeInputSections">
            <div className="">
              <h2>risk:reward</h2>
              <input type="text" placeholder="1:2" className="newTradeInputs" />
            </div>
            <div className="">
              <h2>result</h2>
              <AddTradeDropdown options={results} />
            </div>
          </div>

          {/* p/L  and date */}

          <div className="addTradeInputSections">
            <div className="">
              <h2>P&L amount</h2>
              <input type="text" placeholder="100" className="newTradeInputs" />
            </div>
            <div className="">
              <h2>Date</h2>
              <input type="date" placeholder="Dec 15,2025" className="newTradeInputs" />
            </div>
          </div>
        </section>
        <div className="flex justify-end gap-3 items-center text-sm font-medium">
          <button className="bg-neutral-50 py-2 px-3 rounded-md border border-gray" onClick={() => dispatch(close())}>
            Cancel
          </button>
          <button className="bg-indigo-500 text-white py-2 px-3 rounded-md "> Add Trade</button>
        </div>
      </div>
    </section>
  );
};
export default AddTrade;
