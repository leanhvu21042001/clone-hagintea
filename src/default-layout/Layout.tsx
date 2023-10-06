import React from 'react';

import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export const Layout = () => {
  return (
    <Box className="haginTeaShop-default-layout" position="relative">
      <Header />
      <Box as="main" className="haginTeaShop-main">
        <Outlet />
      </Box>
    </Box>
  );
};
