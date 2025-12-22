import { useDispatch } from 'react-redux';
import { open } from '../features/TradingJournal/addTradePopSlice';
const TradeJournal = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(open())}>Add Trade</button>
    </div>
  );
};
export default TradeJournal;
