import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <>
    <nav>
        <Navbar/>
    </nav>
    <div>
        <Outlet/>
    </div>
    </>
  );
}

export default HomeLayout;
