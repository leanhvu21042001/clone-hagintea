import React from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import useIsHeaderSticky from 'src/hooks/useIsHeaderSticky';
import { HamburgerIcon } from '@chakra-ui/icons';

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
      className="TeaShop-header"
      position={isSticky ? 'fixed' : 'absolute'}
      top={0}
      width="100%"
      zIndex="10"
      ref={headerRef}
    >
      {isDesktop ? (
        <HeaderDesktop isSticky={isSticky} />
      ) : (
        <HeaderMobile isSticky={isSticky} />
      )}
    </Box>
  );
};

interface IHeaderProps {
  isSticky: boolean;
}

const HeaderDesktop = (props: IHeaderProps) => {
  const { isSticky } = props;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      {...handleStickyHeaderStyles(isSticky)}
    >
      <Flex flex={1} justifyContent="space-around">
        <Text>
          <Button
            as={Link}
            to="/"
            variant="VT323"
            fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}
          >
            Trang Chủ
          </Button>
        </Text>
        <Text>
          <Button
            as={Link}
            to="/about"
            variant="VT323"
            fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}
          >
            Giới Thiệu
          </Button>
        </Text>
        <Text>
          <Button
            as={Link}
            to="/shop"
            variant="VT323"
            fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}
          >
            Sản Phẩm
          </Button>
        </Text>
      </Flex>

      <Flex flex={1} justifyContent="center">
        {renderStickyHeaderLogo({ isSticky })}
      </Flex>

      <Flex flex={1} justifyContent="space-around">
        <Text>
          <Button
            as={Link}
            to="/tea-story"
            variant="VT323"
            fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}
          >
            Chuyện Trà
          </Button>
        </Text>
        <Text>
          <Button
            as={Link}
            to="/guide-line"
            variant="VT323"
            fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}
          >
            Hướng Dẫn Sử Dụng
          </Button>
        </Text>
        <Text>
          <Button
            as={Link}
            to="/contact"
            variant="VT323"
            fontSize={['xs', 'sm', 'md', 'lg', 'xl', '2xl']}
          >
            Liên Hệ
          </Button>
        </Text>
      </Flex>
    </Flex>
  );
};

const changeBG = (condition: boolean) => {
  return condition ? '#ffffff' : 'none';
};

const HeaderMobile = (props: IHeaderProps) => {
  const { isSticky } = props;

  const [bg, setBG] = React.useState('none');

  React.useEffect(() => {
    setBG(changeBG(isSticky));
  }, [isSticky]);

  const handleOnAccordionChange = (values: []) => {
    if (isSticky) return;
    setBG(changeBG(values.length !== 0));
  };

  return (
    <Accordion
      allowMultiple
      onChange={handleOnAccordionChange}
      backgroundColor={bg}
      border="none"
      outline="none"
    >
      <AccordionItem border="none">
        <AccordionButton>
          <Box flex={1} textAlign="left">
            <HamburgerIcon color={bg === 'none' ? '#fff' : '#000'} />
          </Box>
          <Box flex="1">
            {renderStickyHeaderLogo({ isSticky, widthBig: '70px', widthSmall: '80px' })}
          </Box>
          <Box flex={1}></Box>
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Flex
            flex={1}
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
          >
            <Text>
              <Button as={Link} to="/" variant="VT323" fontSize={['lg', 'xl', '2xl']}>
                Trang Chủ
              </Button>
            </Text>
            <Text>
              <Button
                as={Link}
                to="/about"
                variant="VT323"
                fontSize={['lg', 'xl', '2xl']}
              >
                Giới Thiệu
              </Button>
            </Text>
            <Text>
              <Button as={Link} to="/shop" variant="VT323" fontSize={['lg', 'xl', '2xl']}>
                Sản Phẩm
              </Button>
            </Text>
          </Flex>
          <Flex
            flex={1}
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
          >
            <Text>
              <Button
                as={Link}
                to="/tea-story"
                variant="VT323"
                fontSize={['lg', 'xl', '2xl']}
              >
                Chuyện Trà
              </Button>
            </Text>
            <Text>
              <Button
                as={Link}
                to="/guide-line"
                variant="VT323"
                fontSize={['lg', 'xl', '2xl']}
              >
                Hướng Dẫn Sử Dụng
              </Button>
            </Text>
            <Text>
              <Button
                as={Link}
                to="/contact"
                variant="VT323"
                fontSize={['lg', 'xl', '2xl']}
              >
                Liên Hệ
              </Button>
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

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

interface IImageHeader {
  isSticky: boolean;
  widthBig?: number | string;
  widthSmall?: number | string;
}
const renderStickyHeaderLogo = (params: IImageHeader) => {
  const { isSticky /* widthBig = 135, widthSmall = 100 */ } = params;

  if (isSticky) {
    return (
      <Text fontSize={['lg', 'xl']} fontWeight="bold" textTransform="uppercase">
        Raymond
      </Text>
    );
  }

  return (
    <Text fontSize={['lg', 'xl']} fontWeight="bold" textTransform="uppercase">
      Raymond
    </Text>
  );
};

export default Header;
