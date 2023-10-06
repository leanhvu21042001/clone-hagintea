import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';

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

export default ProductItem;
