import React from 'react';

import { Box } from '@chakra-ui/react';

const HomeHeroSection1 = () => {
  return (
    <Box>
      <picture>
        <source
          media="(min-width: 768px)"
          data-lazy-srcset="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
          srcSet="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
        />
        <source
          data-lazy-srcset="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
          srcSet="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
        />
        <img
          decoding="async"
          className="hero-image hero-background left hmobile-content-center hmobile-contentv-bottom entered lazyloaded"
          src="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
          alt="Trà shan tuyết cổ thụ Hà Giang Hagintea"
          title="Trang chủ 1"
          data-lazy-src="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
          data-ll-status="loaded"
        />
        <noscript>
          <img
            decoding="async"
            className="hero-image hero-background left hmobile-content-center hmobile-contentv-bottom"
            src="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
            alt="Trà shan tuyết cổ thụ Hà Giang Hagintea"
            title="Trang chủ 1"
          />
        </noscript>
      </picture>
    </Box>
  );
};

export default HomeHeroSection1;
