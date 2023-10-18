import React from 'react';

import { Box, Button, Divider, Flex, Grid, Text } from '@chakra-ui/react';

const HomeHeroSection2 = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: '1fr' }}
      gridTemplateRows={{ base: '1fr' }}
      placeContent="center"
    >
      <Box gridColumn={{ base: '1/2' }} gridRow={{ base: '1/2' }}>
        <picture>
          <source
            media="(min-width: 768px)"
            data-lazy-srcset="https://hagintea.com/wp-content/uploads/2022/01/banner-3.jpg"
            srcSet="https://hagintea.com/wp-content/uploads/2022/01/banner-3.jpg"
          />
          <source
            data-lazy-srcset="https://hagintea.com/wp-content/uploads/2022/01/banner-3.jpg"
            srcSet="https://hagintea.com/wp-content/uploads/2022/01/banner-3.jpg"
          />
          <img
            decoding="async"
            className="hero-image hero-background hero-content-center hmobile-content-center hmobile-contentv-bottom entered lazyloaded"
            src="https://hagintea.com/wp-content/uploads/2022/01/banner-3.jpg"
            alt="Trà shan tuyết cổ thụ Hà Giang Hagintea"
            title="Trang chủ 6"
            data-lazy-src="https://hagintea.com/wp-content/uploads/2022/01/banner-3.jpg"
            data-ll-status="loaded"
          />
          <noscript>
            <img
              decoding="async"
              className="hero-image hero-background hero-content-center hmobile-content-center hmobile-contentv-bottom"
              src="https://hagintea.com/wp-content/uploads/2022/01/banner-3.jpg"
              alt="Trà shan tuyết cổ thụ Hà Giang Hagintea"
              title="Trang chủ 6"
            />
          </noscript>
        </picture>
      </Box>

      <Flex
        color="#fff"
        gridColumn={{ base: '1/2' }}
        gridRow={{ base: '1/2' }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']} textAlign="center">
          KHÁM PHÁ HÀNH TRÌNH CỦA NHỮNG CHIẾC LÁ
        </Text>
        <Divider
          height="2px"
          width="40px"
          margin={{ base: '14px 0px 16px' }}
          backgroundColor="#fff"
          border="unset"
        />
        <Button variant="TeaOutlineButton">XEM THÊM</Button>
      </Flex>
    </Grid>
  );
};

export default HomeHeroSection2;
