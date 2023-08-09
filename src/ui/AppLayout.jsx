import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppLayout() {
  const navigation = useNavigation();
  const thunkStatus = useSelector((state) => state.wishlist.status);
  const isLoading = navigation.state === 'loading' || thunkStatus === 'loading';

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loader />}
      <Header />
      <div className='absolute'>
        <ToastContainer />
      </div>
      <div className='overflow-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
