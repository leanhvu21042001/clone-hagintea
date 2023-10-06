import React from 'react';

import { Box, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import useIsHeaderSticky from 'src/hooks/useIsHeaderSticky';

const Header = () => {
  const { isSticky, headerRef } = useIsHeaderSticky();
  const isDesktop = useBreakpointValue({
    xs: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
    base: false,
  });

  return (
    <Box
      as="header"
      className="haginTeaShop-header"
      position={isSticky ? 'fixed' : 'absolute'}
      top={0}
      width="100%"
      zIndex="10"
      ref={headerRef}
    >
      {isDesktop ? <HeaderDesktop isSticky={isSticky} /> : <HeaderMobile />}
    </Box>
  );
};

interface IHeaderDesktop {
  isSticky: boolean;
}
const HeaderDesktop = (props: IHeaderDesktop) => {
  const { isSticky } = props;

  const handleStickyHeaderStyles = (isSticky: boolean) => {
    if (isSticky)
      return {
        padding: {
          base: '10px 48px',
        },
        backgroundColor: '#fff',
      };

    return {
      padding: {
        base: '24px 48px',
      },
    };
  };

  const renderStickyHeaderLogo = (isSticky: boolean) => {
    if (isSticky)
      return <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}>LAVDEV</Text>;
    return <Text fontSize={['md', 'lg', 'xl', '2xl', '3xl', '4xl']}>LAVDEV</Text>;
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      {...handleStickyHeaderStyles(isSticky)}
    >
      <Flex flex={1} justifyContent="space-around">
        <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}>
          <Button as={Link} to="/" variant="VT323">
            Trang Chủ
          </Button>
        </Text>
        <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}>
          <Button as={Link} to="/about" variant="VT323">
            Giới Thiệu
          </Button>
        </Text>
        <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}>
          <Button as={Link} to="/shop" variant="VT323">
            Sản Phẩm
          </Button>
        </Text>
      </Flex>

      <Flex flex={1} justifyContent="center">
        {renderStickyHeaderLogo(isSticky)}
      </Flex>

      <Flex flex={1} justifyContent="space-around">
        <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}>
          <Button as={Link} to="/tea-story" variant="VT323">
            Chuyện Trà
          </Button>
        </Text>
        <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}>
          <Button as={Link} to="/" variant="VT323">
            Hướng Dẫn Sử Dụng
          </Button>
        </Text>
        <Text fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}>
          <Button as={Link} to="/" variant="VT323">
            Liên Hệ
          </Button>
        </Text>
      </Flex>
    </Flex>
  );
};

const HeaderMobile = () => {
  return <header>Header Mobile</header>;
};

export default Header;
