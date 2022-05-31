import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

import './AppLayout.scss';

const AppLayout = (props) => {
  return (
    <div className='app-layout'>
      <Sidebar />
      <div className='main-content'>
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
