import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Root = () => {
  return (
    <main className=" flex">
      <SideBar />
      <section>
        <Header />
        <Outlet />
      </section>
    </main>
  );
};
export default Root;
