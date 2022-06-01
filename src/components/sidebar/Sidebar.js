import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
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
  FaArrowLeft,
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
  const [responsiveNavbarState, setResponsiveNavbarState] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  // if (isTabletOrMobile) setCompactState(false);
  const overLists = [
    {
      title: 'Overview',
      icon: <FaBtc className='-rotate-12' />,
      link: '/overview',
    },
    {
      title: 'Documentation',
      icon: <FaLayerGroup />,
      link: 'https://docs.bmcc.finance/',
    },
  ];
  const navLists = [
    {
      title: 'Buy Now',
      icon: <img src={Pancakeswap} alt='Logo' className='h-6 cursor-pointer' />,
      link: 'https://pancakeswap.finance/swap?outputCurrency=0xb6d8ee99d5d6cfe7d80b666e6ff5e74e3f72756b',
    },
    {
      title: 'Faas',
      icon: <FaChartLine />,
      link: '',
    },
    {
      title: 'My wallet',
      icon: <FaWallet />,
      link: '',
    },
    {
      title: 'Pools',
      icon: <FaInbox />,
      link: '',
    },
    {
      title: 'Governanace',
      icon: <FaBlackberry />,
      link: '',
    },
    {
      title: 'Staking',
      icon: <FaCoins />,
      link: '/staking',
    },
    {
      title: 'P2E',
      icon: <FaCompressAlt />,
      link: '',
    },
  ];
  const faasLists = [
    {
      title: 'Binance',
      icon: <img src={Binance} alt='Logo' className='h-6 cursor-pointer' />,
      link: '',
    },
    {
      title: 'Fantom',
      icon: <img src={Fantom} alt='Logo' className='h-6 cursor-pointer' />,
      link: '',
    },
    {
      title: 'Avalanche',
      icon: <img src={Avalanche} alt='Logo' className='h-6 cursor-pointer' />,
      link: '',
    },
    {
      title: 'Solana',
      icon: <img src={Solana} alt='Logo' className='h-6 cursor-pointer' />,
      link: '',
    },
    {
      title: 'Elrond',
      icon: <img src={Elrond} alt='Logo' className='h-6 cursor-pointer' />,
      link: '',
    },
    {
      title: 'Polygon',
      icon: <img src={Polygon} alt='Logo' className='h-6 cursor-pointer' />,
      link: '',
    },
  ];
  const externalLinks = [
    {
      title: 'BSC Scan',
      icon: <img src={Bscscan} alt='Logo' className='h-5 cursor-pointer' />,
      link: 'https://bscscan.com/token/0xb6d8ee99d5d6cfe7d80b666e6ff5e74e3f72756b',
    },
    {
      title: 'Telegram',
      icon: <FaTelegram />,
      link: 'https://t.me/BINANCEMCC',
    },
    {
      title: 'Twitter',
      icon: <FaTwitter />,
      link: 'https://twitter.com/binancemcc',
    },
    {
      title: 'Medium',
      icon: <FaMediumM />,
      link: 'https://medium.com/@bmccapital1',
    },
    {
      title: 'Audit',
      icon: <FaGithubAlt />,
      link: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/December/BINANCE_MULTI_CHAIN_CAPITAL_Full_Smart_Contract_Security_Audit.pdf',
    },
  ];
  const navbarLists = (
    <>
      <div
        className={`h-16 text-sm text-[#b6b6b6] border-b border-[#20325b] flex w-[18rem] justify-start items-center gap-3 pl-8 cursor-pointer`}
      >
        {isTabletOrMobile ? (
          <div
            onClick={() => {
              setResponsiveNavbarState(false);
            }}
          >
            <FaArrowLeft className='text-2xl' />
          </div>
        ) : (
          <div
            onClick={() => {
              setCompactState((prev) => !prev);
            }}
          >
            <FaBars className='text-2xl' />
          </div>
        )}

        <img src={Logo} alt='Logo' className='h-9 pl-3 cursor-pointer title' />
        <div className='title'>version 0.1 beta</div>
      </div>
      <div className='main-navbar overflow-scroll h-full custom-scroll'>
        <ul>
          {overLists.map((item, index) => {
            return index !== 1 ? (
              <Link to={item.link}>
                <li>
                  <div className='text-xl'>{item.icon}</div>
                  <div className='title'>{item.title}</div>
                </li>
              </Link>
            ) : (
              <a href={item.link} target={'_blank'} rel='noreferrer'>
                <li>
                  <div className='text-xl'>{item.icon}</div>
                  <div className='title'>{item.title}</div>
                </li>
              </a>
            );
          })}
        </ul>
        <ul>
          <div className='nav-header title'>NAVIGATION</div>
          {navLists.map((item, index) => {
            return index !== 0 ? (
              <Link to={item.link}>
                <li>
                  <div className='text-xl'>{item.icon}</div>
                  <div className='title'>{item.title}</div>
                </li>
              </Link>
            ) : (
              <a href={item.link} target={'_blank'} rel='noreferrer'>
                <li>
                  <div className='text-xl'>{item.icon}</div>
                  <div className='title'>{item.title}</div>
                </li>
              </a>
            );
          })}
        </ul>
        <ul>
          <div className='nav-header title'>FAAS</div>
          {faasLists.map((item, index) => {
            return (
              <Link to={item.link}>
                <li>
                  <div className='text-xl'>{item.icon}</div>
                  <div className='title'>{item.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <div className='nav-header title'>EXTERNAL LINKS</div>
          {externalLinks.map((item, index) => {
            return (
              <a href={item.link} target={'_blank'} rel='noreferrer'>
                <li>
                  <div className='text-xl'>{item.icon}</div>
                  <div className='title'>{item.title}</div>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
  return isTabletOrMobile ? (
    <>
      <div className='absolute flex flex-row gap-3 justify-start items-center h-16 w-auto left-10 top-0 z-20'>
        <FaBars
          className='text-xl text-[#b6b6b6] cursor-pointer'
          onClick={() => {
            setResponsiveNavbarState(!responsiveNavbarState);
          }}
        />
        <img src={Logo} alt='Logo' className='h-9 pl-3 cursor-pointer' />
      </div>
      <nav
        className={
          !responsiveNavbarState
            ? 'responsive-nav navbar-close'
            : 'responsive-nav navbar-open'
        }
      >
        {navbarLists}
      </nav>
    </>
  ) : (
    <nav className={compactState ? 'is-compact' : ''}>{navbarLists}</nav>
  );
};

export default Sidebar;
