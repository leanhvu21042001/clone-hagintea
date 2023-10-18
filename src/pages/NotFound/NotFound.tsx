import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapperNoneBackground from 'src/components/PageWrapperNoneBackground';

const NotFound = () => {
  return (
    <PageWrapperNoneBackground className="TeaShop-not-found">
      <Box padding={{ base: '60px' }}>
        <Flex justifyContent="center">
          <Text
            fontSize={['xl', '2xl', '3xl', '4xl', '5xl', '6xl']}
            fontWeight="semibold"
            color="#dab7b7"
          >
            4
          </Text>
          <Text
            fontSize={['xl', '2xl', '3xl', '4xl', '5xl', '6xl']}
            fontWeight="semibold"
            color="#b7b7b7"
          >
            0
          </Text>
          <Text
            fontSize={['xl', '2xl', '3xl', '4xl', '5xl', '6xl']}
            fontWeight="semibold"
            color="#dab7b7"
          >
            4
          </Text>
        </Flex>
        <Text
          fontSize={['xl', '2xl', '3xl', '4xl', '5xl', '6xl']}
          textAlign="center"
          color="#67a9cb"
        >
          PAGE NOT FOUND
        </Text>

        <Button
          variant="TeaOutlineButton"
          display="flex"
          placeContent="center"
          margin="auto"
          marginTop="60px"
          as={Link}
          to="/"
        >
          <ArrowBackIcon />
          <Text>Go back to home</Text>
        </Button>
      </Box>
    </PageWrapperNoneBackground>
  );
};

export default NotFound;
