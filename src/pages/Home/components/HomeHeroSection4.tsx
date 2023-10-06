import React from 'react';

import { Box, Button, Divider, FormLabel, Grid, Input, Text } from '@chakra-ui/react';

const HomeHeroSection4 = () => {
  return (
    <Box>
      <Grid gridTemplateColumns={{ base: '1fr' }} gridTemplateRows={{ base: '1fr' }}>
        <Box gridColumn={{ base: '1/2' }} gridRow={{ base: '1/2' }}>
          <picture>
            <source
              media="(min-width: 768px)"
              data-lazy-srcset="https://hagintea.com/wp-content/uploads/2022/05/2a1-scaled.jpg"
              srcSet="https://hagintea.com/wp-content/uploads/2022/05/2a1-scaled.jpg"
            />
            <source
              data-lazy-srcset="https://hagintea.com/wp-content/uploads/2022/05/mobile-2a1-scaled.jpg"
              srcSet="https://hagintea.com/wp-content/uploads/2022/05/mobile-2a1-scaled.jpg"
            />
            <img
              decoding="async"
              className="hero-image hero-background left hmobile-content-center hmobile-contentv-bottom entered lazyloaded"
              src="https://hagintea.com/wp-content/uploads/2022/05/2a1-scaled.jpg"
              alt="Trà shan tuyết cổ thụ Hà Giang Hagintea"
              title="Trang chủ 7"
              data-lazy-src="https://hagintea.com/wp-content/uploads/2022/05/2a1-scaled.jpg"
              data-ll-status="loaded"
            />
            <noscript>
              <img
                decoding="async"
                className="hero-image hero-background left hmobile-content-center hmobile-contentv-bottom"
                src="https://hagintea.com/wp-content/uploads/2022/05/2a1-scaled.jpg"
                alt="Trà shan tuyết cổ thụ Hà Giang Hagintea"
                title="Trang chủ 7"
              />
            </noscript>
          </picture>
        </Box>

        <Grid
          gridColumn={{ base: '1/2' }}
          gridRow={{ base: '1/2' }}
          alignItems="center"
          maxWidth={{ base: '50%' }}
        >
          <Box padding={{ base: '60px 120px' }}>
            <Text color="#00264b" fontSize={['sm']}>
              NHẬN TIN TỨC MỚI NHẤT TỪ CHÚNG TÔI.
            </Text>
            <Text color="#00264b" fontSize={['sm', 'md', 'lg', 'xl', '2xl', '3xl']}>
              THEO DÕI HAGINTEA
            </Text>
            <Divider
              height="2px"
              width="40px"
              margin={{ base: '24px 0 16px 0' }}
              backgroundColor="#000"
              border="unset"
            />
            <form>
              <FormLabel>
                <Input
                  size="lg"
                  placeholder="Email của bạn"
                  fontSize={['sm', 'md', 'lg']}
                  padding={{ base: '10px 17px' }}
                  maxWidth="50%"
                />
              </FormLabel>
              <Button
                size="lg"
                color="#fff"
                borderColor="#00264b"
                backgroundColor="#00264b"
                padding={{ base: '10px 38px' }}
                margin={{ base: '17px 0 12px' }}
                borderRadius={5}
                _hover={{ backgroundColor: '#DDB40D', borderColor: '#DDB40D' }}
              >
                THEO DÕI
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeHeroSection4;
