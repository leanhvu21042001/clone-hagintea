import React from 'react';

import { Box, Divider } from '@chakra-ui/react';
import HomeHeroSection1 from './components/HomeHeroSection1';
import HomeAboutUsSection from './components/HomeAboutUsSection';
import HomeHeroSection2 from './components/HomeHeroSection2';
import HomeHeroSection3 from './components/HomeHeroSection3';
import HomeHeroSection4 from './components/HomeHeroSection4';

const Home = () => {
  return (
    <Box className="haginTeaShop-home">
      <HomeHeroSection1 />
      <HomeAboutUsSection />
      <HomeHeroSection2 />
      <Divider height="96px" border="unset" backgroundColor="unset" />
      <HomeHeroSection3 />
      <HomeHeroSection4 />
    </Box>
  );
};

export default Home;
