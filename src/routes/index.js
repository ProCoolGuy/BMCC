import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/error';
import OverviewPage from 'pages/overview';
import StakingPage from 'pages/staking';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<OverviewPage />} />
      <Route path='/overview' element={<OverviewPage />} />
      <Route path='/staking' element={<StakingPage />} />
      <Route component={ErrorPage} />
    </Routes>
  );
};

export default AppRoutes;
