import React, { useState } from 'react';
import {
  FaBars,
  FaBtc,
  FaLayerGroup,
  FaChartLine,
  FaWallet,
  FaInbox,
  FaBlackberry,
  FaCoins,
  FaCompressAlt,
  FaTelegram,
  FaTwitter,
  FaMediumM,
  FaGithubAlt,
} from 'react-icons/fa';
import Logo from '../../assets/icons/logo-dark.png';
import Pancakeswap from '../../assets/icons/pancakeswap.png';
import Bscscan from '../../assets/icons/bscscan-logo-circle.svg';
import Binance from '../../assets/icons/binance-coin.png';
import Fantom from '../../assets/icons/fantom.png';
import Avalanche from '../../assets/icons/avalanche.png';
import Solana from '../../assets/icons/solana.png';
import Elrond from '../../assets/icons/elrond-egld.png';
import Polygon from '../../assets/icons/polygon.png';

import './Sidebar.scss';
const Sidebar = () => {
  const [compactState, setCompactState] = useState(false);

  return (
    <nav className={compactState ? 'is-compact' : ''}>
      <div
        className={`h-16 text-sm text-[#b6b6b6] border-b border-[#20325b] flex w-[18rem] justify-start items-center gap-3 pl-8 cursor-pointer`}
      >
        <div
          onClick={() => {
            setCompactState((prev) => !prev);
          }}
        >
          <FaBars className='text-2xl' />
        </div>
        <img src={Logo} alt='Logo' className='h-9 pl-3 cursor-pointer title' />
        <div className='title'>version 0.1 beta</div>
      </div>
      <div className='main-navbar overflow-scroll h-full custom-scroll'>
        <ul>
          <li>
            <FaBtc className='text-xl -rotate-12' />
            <div className='title'>Overview</div>
          </li>
          <li>
            <FaLayerGroup className='text-xl' />
            <div className='title'>Documentation</div>
          </li>
        </ul>
        <ul>
          <div className='nav-header'>
            <div className='title'>NAVIGATION</div>
          </div>
          <li>
            <img src={Pancakeswap} alt='Logo' className='h-6 cursor-pointer' />
            <div className='title'>Buy Now</div>
          </li>
          <li>
            <FaChartLine className='text-xl' />
            <div className='title'>Faas</div>
          </li>
          <li>
            <FaWallet className='text-xl' />
            <div className='title'>My wallet</div>
          </li>
          <li>
            <FaInbox className='text-xl' />
            <div className='title'>Pools</div>
          </li>
          <li>
            <FaBlackberry className='text-xl' />
            <div className='title'>Governance</div>
          </li>
          <li>
            <FaCoins className='text-xl' />
            <div className='title'>Staking</div>
          </li>
          <li>
            <FaCompressAlt className='text-xl' />
            <div className='title'>P2E</div>
          </li>
        </ul>
        <ul>
          <div className='nav-header title'>FAAS</div>
          <li>
            <img src={Binance} alt='Logo' className='h-6 cursor-pointer' />
            <div className='title'>Binance</div>
          </li>
          <li>
            <img src={Fantom} alt='Logo' className='h-6 cursor-pointer' />
            <div className='title'>Fantom</div>
          </li>
          <li>
            <img src={Avalanche} alt='Logo' className='h-6 cursor-pointer' />
            <div className='title'>Avalanche</div>
          </li>
          <li>
            <img src={Solana} alt='Logo' className='h-6 cursor-pointer' />
            <div className='title'>Solana</div>
          </li>
          <li>
            <img src={Elrond} alt='Logo' className='h-6 cursor-pointer' />
            <div className='title'>Elrond</div>
          </li>
          <li>
            <img src={Polygon} alt='Logo' className='h-6 cursor-pointer' />
            <div className='title'>Polygon</div>
          </li>
        </ul>
        <ul>
          <div className='nav-header'>
            <div className='title'>EXTERNAL LINKS</div>
          </div>
          <li>
            <img src={Bscscan} alt='Logo' className='h-5 cursor-pointer' />
            <div className='title'>BSC Scan</div>
          </li>
          <li>
            <FaTelegram className='text-xl' />
            <div className='title'>Telegram</div>
          </li>
          <li>
            <FaTwitter className='text-xl' />
            <div className='title'>Twitter</div>
          </li>
          <li>
            <FaMediumM className='text-xl' />
            <div className='title'>Medium</div>
          </li>
          <li>
            <FaGithubAlt className='text-xl' />
            <div className='title'>Audit</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
