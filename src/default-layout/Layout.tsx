import React from 'react';

import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export const Layout = () => {
  return (
    <Box className="TeaShop-default-layout" position="relative">
      <Header />
      <Box as="main" className="TeaShop-main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
