import './Header.scss';
import { useMediaQuery } from 'react-responsive';
// import { useState } from 'react';
import { FaRegListAlt, FaExternalLinkAlt, FaRegBell } from 'react-icons/fa';
// import ToggleButton from 'react-toggle-button';
// import ToggleSwitch from '../toggle';
const Header = () => {
  // const [mode, setMode] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <>
      <header>
        <div className='header-item flex flex-row gap-3 justify-center items-center  cursor-pointer'>
          {!isTabletOrMobile ? (
            <>
              <FaRegListAlt className='text-yellow-400 text-2xl' />
              <div>Binance Multi-chain Capital</div>
              <FaExternalLinkAlt className='text-xs text-gray-500 externallink' />
            </>
          ) : (
            ''
          )}
        </div>
      </header>
      <div className='gap-5 flex flex-row items-center justify-center absolute h-16 text-white right-10 text-base'>
        {/* <ToggleSwitch /> */}
        <FaRegBell className='text-gray-500 text-lg' />
      </div>
    </>
  );
};

export default Header;
