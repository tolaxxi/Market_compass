import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import InstrumentDropDown from '../components/InstrumentDropDown';
import TimeFrameDropDown from '../components/TimeFrameDropDown';
import MobileMenu from '../components/MobileMenu';

const Root = () => {
  return (
    <main className="flex h-dvh w-full">
      <SideBar />
      <MobileMenu />
      <section className="w-full flex flex-col">
        <Header />
        <section className="bg-stone-50 h-dvh grow px-5">
          <Outlet />
        </section>
      </section>
    </main>
  );
};
export default Root;
