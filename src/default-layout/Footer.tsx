import React from 'react';

import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

import Facebook from 'src/assets/icon/Facebook';
import Instagram from 'src/assets/icon/Instagram';
import TikTok from 'src/assets/icon/TikTok';
import LocationWhite from 'src/assets/icon/LocationWhite';
import LetterWhite from 'src/assets/icon/LetterWhite';
import PhoneWhite from 'src/assets/icon/PhoneWhite';
import Youtube from 'src/assets/icon/Youtube';

const Footer = () => {
  return (
    <Box
      paddingX={{ base: 10, lg: 20, md: 20, sm: 10 }}
      backgroundColor="#000"
      color="#fff"
      fontFamily="VT323"
    >
      <Flex
        py={5}
        flexDirection={{
          base: 'column',
          lg: 'row',
          md: 'row',
          sm: 'column',
        }}
        gap={{ base: 5, lg: 0, md: 0, sm: 5 }}
        justifyContent={{
          base: 'center',
          lg: 'space-between',
          md: 'space-between',
          sm: 'center',
        }}
        textAlign={{
          base: 'center',
          lg: 'unset',
          md: 'unset',
          sm: 'center',
        }}
      >
        <Text fontSize={['lg', 'xl']} fontWeight="bold" textTransform="uppercase">
          Raymond
        </Text>

        <Box
          display={{ base: 'block', lg: 'none', md: 'none', sm: 'block' }}
          py={5}
          textAlign="center"
          borderBottom="1px solid #3e3e3e"
        >
          <Flex alignItems="center" justifyContent="center" gap={2}>
            <LetterWhite />
            <Text>info@raymond.net</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="center" gap={2}>
            <PhoneWhite />
            <Text>024 8567 687</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="center" gap={2}>
            <Text>
              <Box as="span" marginRight={2}>
                <LocationWhite />
              </Box>
              Số LP 20, Ngõ 219 Trung Kính, phường Yên Hoà, Quận Cầu Giấy, Thành phố Hà
              Nội
            </Text>
          </Flex>
        </Box>

        <Box>
          <Text fontSize={26} fontWeight={500}>
            Chính sách
          </Text>
          <Text as={Link} to={'/chinh-sach'} py={1.5} display="block">
            Chính sách bảo mật
          </Text>
          <Text as={Link} to={'/chinh-sach'} py={1.5} display="block">
            Chính sách đặt hàng
          </Text>
          <Text as={Link} to={'/chinh-sach'} py={1.5} display="block">
            Chính sách đổi trả
          </Text>
        </Box>
        <Box>
          <Text fontSize={26} fontWeight={500}>
            Hướng dẫn
          </Text>
          <Text as={Link} to={'/huong-dan-su-dung'} py={1.5} display="block">
            Hướng dẫn mua hàng
          </Text>
          <Text as={Link} to={'/huong-dan-su-dung'} py={1.5} display="block">
            Hướng dẫn thanh toàn
          </Text>
          <Text as={Link} to={'/huong-dan-su-dung'} py={1.5} display="block">
            Hướng dẫn đổi trả
          </Text>
        </Box>
        <Box>
          <Text fontSize={26} fontWeight={500}>
            Mạng xã hội
          </Text>
          <Flex
            mt={5}
            justifyContent={{
              base: 'center',
              lg: 'space-between',
              md: 'space-between',
              sm: 'center',
            }}
          >
            <Link to="https://www.facebook.com/toan.sao.23" target="_blank">
              <Facebook />
            </Link>

            <Link to="https://www.tiktok.com/@toansao2" target="_blank">
              <TikTok />
            </Link>
            <Link to="https://www.instagram.com/toansao.23/" target="_blank">
              <Instagram />
            </Link>
            <Link to="https://www.youtube.com/@toansao23" target="_blank">
              <Youtube />
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Box display={{ base: 'none', lg: 'block', md: 'block', sm: 'none' }} py={5}>
        <Flex alignItems="center" gap={2}>
          <LetterWhite />
          <Text>info@raymond.net</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <PhoneWhite />
          <Text>024 8567 687</Text>
        </Flex>
        <Flex alignItems="center" gap={2}>
          <LocationWhite />
          <Text>
            Số LP 20, Ngõ 219 Trung Kính, phường Yên Hoà, Quận Cầu Giấy, Thành phố Hà Nội
          </Text>
        </Flex>
      </Box>

      <Text py={5} borderTop="1px solid #C3C3C3" textAlign="center">
        © 2024 Raymond. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
