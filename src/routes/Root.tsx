import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Root = () => {
  return (
    <main className="flex h-dvh ">
      <SideBar />
      <section className="w-full flex flex-col">
        <Header />
        <section className="bg-stone-50 grow ">
          <Outlet />
        </section>
      </section>
    </main>
  );
};
export default Root;
