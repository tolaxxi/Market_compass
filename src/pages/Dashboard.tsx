// import OverviewCard from '../components/OverviewCard';
import OverviewCard from '../components/OverviewCard';
import WatchlistCard from '../components/WatchlistCard';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full justify-center items-center ">
      <WatchlistCard />
      <OverviewCard />
    </div>
  );
};
export default Dashboard;
