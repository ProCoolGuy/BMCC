import './Header.scss';
import { useState } from 'react';
import { FaRegListAlt, FaExternalLinkAlt, FaRegBell } from 'react-icons/fa';
import ToggleButton from 'react-toggle-button';
import styles from './toggle.module.css';
const Header = () => {
  const [mode, setMode] = useState(true);

  return (
    <>
      <header>
        <FaRegListAlt className='text-yellow-400 text-2xl' />
        <div>Binance Multi-chain Capital</div>
        <FaExternalLinkAlt className='text-xs text-gray-500 hover:text-yellow-400 cursor-pointer' />
      </header>
      <div className='gap-5 flex flex-row items-center justify-center absolute h-16 text-white right-10 text-base'>
        Mode
        <ToggleButton
          inactiveLabel={''}
          activeLabel={''}
          colors={{
            activeThumb: {
              base: 'rgb(250,250,250)',
            },
            inactiveThumb: {
              base: 'rgb(206,206,206)',
            },
            active: {
              base: 'rgb(207,221,0)',
              hover: 'rgb(177, 191, 0)',
            },
            inactive: {
              base: 'rgb(250,250,250)',
              hover: 'rgb(250,250,250)',
            },
          }}
          value={mode || false}
          onToggle={(mode) => {
            setMode(!mode);
          }}
        />
        <FaRegBell className='text-gray-500 text-lg' />
      </div>
    </>
  );
};

export default Header;
