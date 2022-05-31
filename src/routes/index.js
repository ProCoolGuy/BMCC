import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/error';
import OverviewPage from 'pages/overview';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<OverviewPage />} />
      <Route component={ErrorPage} />
    </Routes>
  );
};

export default AppRoutes;
