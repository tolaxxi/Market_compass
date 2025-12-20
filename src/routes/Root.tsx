import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import InstrumentDropDown from '../components/InstrumentDropDown';
import TimeFrameDropDown from '../components/TimeFrameDropDown';

const Root = () => {
  return (
    <main className="flex h-dvh ">
      <SideBar />
      <section className="w-full flex flex-col">
        <Header />
        <section className="bg-stone-50 grow px-5">
          <div className="flex gap-3 items-center justify-end w-full py-2.5">
            <InstrumentDropDown />
            <TimeFrameDropDown />
          </div>
          <Outlet />
        </section>
      </section>
    </main>
  );
};
export default Root;
