import './Overview.scss';
import AppLayout from 'pages/AppLayout';

const OverviewPage = () => {
  return (
    <AppLayout>
      <div className='bg-[#0d141d] h-screen'>
        <div className='text-4xl pt-[5rem] pl-[20rem] text-white font-semibold'>
          Comming soon
        </div>
      </div>
    </AppLayout>
  );
};

export default OverviewPage;
