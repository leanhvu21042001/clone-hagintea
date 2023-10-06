import React from 'react';

import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';

const HomeHeroSection3 = () => {
  return (
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(calc(100%/3), 1fr))"
      gridTemplateRows="auto"
    >
      <Grid
        gridTemplateColumns={{ base: '1fr' }}
        gridTemplateRows={{ base: '1fr' }}
        placeContent="center"
      >
        <Box gridColumn={{ base: '1/2' }} gridRow={{ base: '1/2' }}>
          <Image
            width="100%"
            src="https://hagintea.com/wp-content/uploads/2022/01/banner-4.jpg"
            alt="banner 4"
          />
        </Box>

        <Flex
          color="#fff"
          gridColumn={{ base: '1/2' }}
          gridRow={{ base: '1/2' }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={5}
          padding={{ base: '60px' }}
          height="fit-content"
          alignSelf="flex-end"
          textAlign="center"
        >
          <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']} textAlign="center">
            Phẩm trà
          </Text>
          <Text margin={{ base: '14px 0px 16px' }}>
            Dù cách làm trà hiện đại hay truyền thống, mục đích đều để có một tách trà
            ngon
          </Text>
          <Button variant="haginTeaOutlineButton">XEM THÊM</Button>
        </Flex>
      </Grid>

      <Grid
        gridTemplateColumns={{ base: '1fr' }}
        gridTemplateRows={{ base: '1fr' }}
        placeContent="center"
      >
        <Box gridColumn={{ base: '1/2' }} gridRow={{ base: '1/2' }}>
          <Image
            width="100%"
            src="https://hagintea.com/wp-content/uploads/2022/01/banner-5.jpg"
            alt="banner 5"
          />
        </Box>
        <Flex
          color="#fff"
          gridColumn={{ base: '1/2' }}
          gridRow={{ base: '1/2' }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={5}
          padding={{ base: '60px' }}
          height="fit-content"
          alignSelf="flex-end"
          textAlign="center"
        >
          <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']} textAlign="center">
            PHA TRÀ
          </Text>
          <Text margin={{ base: '14px 0px 16px' }}>
            Uống trà có thể phức tạp cầu kỳ, nhưng cũng có thể giản đơn mà vẫn trọn vẹn
          </Text>
          <Button variant="haginTeaOutlineButton">XEM THÊM</Button>
        </Flex>
      </Grid>

      <Grid
        gridTemplateColumns={{ base: '1fr' }}
        gridTemplateRows={{ base: '1fr' }}
        placeContent="center"
      >
        <Box gridColumn={{ base: '1/2' }} gridRow={{ base: '1/2' }}>
          <Image
            width="100%"
            src="https://hagintea.com/wp-content/uploads/2022/01/banner-6.jpg"
            alt="banner 6"
          />
        </Box>

        <Flex
          color="#fff"
          gridColumn={{ base: '1/2' }}
          gridRow={{ base: '1/2' }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={5}
          padding={{ base: '60px' }}
          height="fit-content"
          alignSelf="flex-end"
          textAlign="center"
        >
          <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']} textAlign="center">
            CHUYỆN TRÀ
          </Text>
          <Text margin={{ base: '14px 0px 16px' }}>
            Thưởng trà, không chỉ có trà, mà còn là những câu chuyện được kể suốt ngàn năm
          </Text>
          <Button variant="haginTeaOutlineButton">XEM THÊM</Button>
        </Flex>
      </Grid>
    </Grid>
  );
};

export default HomeHeroSection3;
