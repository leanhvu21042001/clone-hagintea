import { Box, Button, Container, Divider, Grid, Text } from '@chakra-ui/react';
import React from 'react';

const HomeAboutUsSection = () => {
  return (
    <Container maxWidth="container.lg">
      <Text
        fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}
        textAlign="center"
        margin={{ base: '90px 0 25px' }}
      >
        VỀ CHÚNG TÔI
      </Text>
      <Divider
        height="2px"
        width="40px"
        margin={{ base: '24px auto 16px auto' }}
        backgroundColor="#000"
        border="unset"
      />
      <Text maxWidth={{ base: 700 }} margin={{ base: '24px auto' }} textAlign="center">
        Hagintea là sự kết hợp giữa Hà Giang – nơi chúng tôi bắt đầu, và Tea – làm chúng
        tôi say đắm. Chúng tôi có một khát khao muốn giới thiệu cho cộng đồng trong nước,
        bạn bè quốc tế biết đến một sản vật quý giá mang nhiều ý nghĩa của Việt Nam. Những
        cây trà Shan tuyết cổ thụ ẩn mình trên núi đá và truyền thống làm trà đã có từ
        trăm năm.
      </Text>

      <Grid gridTemplateColumns={{ base: '1fr' }} gridTemplateRows={{ base: '1fr' }}>
        <Box gridColumn={{ base: '1/2' }} gridRow={{ base: '1/2' }}>
          <picture>
            <source
              media="(min-width: 768px)"
              data-lazy-srcset="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-xanh-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
              srcSet="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-xanh-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
            />
            <source
              data-lazy-srcset="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-xanh-mobile.jpg"
              srcSet="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-xanh-mobile.jpg"
            />
            <img
              decoding="async"
              className="hero-image hero-background left hmobile-content-center hmobile-contentv-bottom entered lazyloaded"
              src="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-xanh-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
              alt="Trà shan tuyết cổ thụ Hà Giang Hagintea"
              title="Trang chủ 2"
              data-lazy-src="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-xanh-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
              data-ll-status="loaded"
            />
            <noscript>
              <img
                decoding="async"
                className="hero-image hero-background left hmobile-content-center hmobile-contentv-bottom"
                src="https://hagintea.com/wp-content/uploads/2022/05/banner-tra-xanh-shan-tuyet-co-thu-ha-giang-hagintea.jpg"
                alt="Trà shan tuyết cổ thụ Hà Giang Hagintea"
                title="Trang chủ 2"
              />
            </noscript>
          </picture>
        </Box>

        <Grid
          gridColumn={{ base: '1/2' }}
          gridRow={{ base: '1/2' }}
          placeContent={{
            xl: 'center',
            lg: 'center',
            md: 'center',
            sm: 'end center',
            base: 'end center',
          }}
          textAlign={{
            xl: 'unset',
            lg: 'unset',
            md: 'unset',
            sm: 'center',
            base: 'center',
          }}
          width={{ xl: '50%', lg: '50%', md: '50%', sm: '100%', base: '100%' }}
        >
          <Box
            padding={{
              xl: '60px 120px',
              lg: '60px 120px',
              md: '60px 120px',
              sm: '5px 12px',
              base: '5px 12px',
            }}
          >
            <Text color="#00264b" fontSize={['lg', 'xl', '2xl', '3xl', '4xl', '5xl']}>
              HAGINTEA
            </Text>
            <Text
              margin={{
                xl: '24px 0',
                lg: '24px 0',
                md: '24px 0',
                sm: '4px 0',
                base: '4px 0',
              }}
            >
              Khám phá hương vị tuyệt vời đến từ những búp trà cổ thụ.
            </Text>
            <Button variant="TeaFilledButton">XEM NGAY</Button>
          </Box>
        </Grid>
      </Grid>

      <Divider height={50} backgroundColor="unset" border="unset" />

      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gridTemplateRows="auto"
        gap={10}
      >
        {[1, 2, 3].map((item) => (
          <ProductItem key={item} />
        ))}
      </Grid>
    </Container>
  );
};

const ProductItem = () => {
  return (
    <Box textAlign="center" position="relative" marginBottom="50px" role="group">
      <Box>
        <img
          style={{ margin: 'auto' }}
          width="600"
          height="474"
          src="https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-600x474.png"
          className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail entered lazyloaded"
          alt="ảnh 1 hồng trà shan tuyết cổ thụ hà giang hộp 100gram"
          decoding="async"
          data-lazy-srcset="https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-600x474.png 600w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-300x237.png 300w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-1024x809.png 1024w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-768x607.png 768w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-800x632.png 800w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-560x442.png 560w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1.png 1200w"
          data-lazy-sizes="(max-width: 600px) 100vw, 600px"
          title="Trang chủ 3"
          data-lazy-src="https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-600x474.png"
          data-ll-status="loaded"
          sizes="(max-width: 600px) 100vw, 600px"
          srcSet="https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-600x474.png 600w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-300x237.png 300w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-1024x809.png 1024w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-768x607.png 768w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-800x632.png 800w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1-560x442.png 560w, https://hagintea.com/wp-content/uploads/2022/09/anh-san-pham-hong-tra-1.png 1200w"
        />
      </Box>
      <Text>Hồng trà Shan tuyết Hagintea</Text>
      <Text>275.000 VND</Text>
      <Box
        position="absolute"
        width="100%"
        display="none"
        _groupHover={{ display: 'block' }}
      >
        <Button>Thêm vào giỏ hàng</Button>
      </Box>
    </Box>
  );
};
export default HomeAboutUsSection;
