import { Container, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import PageWrapperNoneBackground from 'src/components/PageWrapperNoneBackground';
import ProductItem from './components/ProductItem';

const Shop = () => {
  return (
    <PageWrapperNoneBackground className="haginTeaShop-shop">
      <Container maxWidth="container.lg">
        <Text
          fontSize={['md', 'lg', 'xl', '2xl', '3xl', '4xl']}
          textAlign="center"
          fontWeight="semibold"
          color="#00264B"
        >
          CỬA HÀNG
        </Text>

        <Grid
          marginTop={{ base: '50px' }}
          gridTemplateColumns="repeat(auto-fit, minmax(calc(90%/3), 1fr))"
          gridTemplateRows="auto"
          gap={10}
        >
          {[1, 2, 3].map((item) => (
            <ProductItem key={item} />
          ))}
        </Grid>
      </Container>
    </PageWrapperNoneBackground>
  );
};

export default Shop;
