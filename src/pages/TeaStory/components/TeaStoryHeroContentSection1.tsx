import React from 'react';

import { Box, Container, Divider, Grid, Image, Text } from '@chakra-ui/react';

interface ITeaStoryHeroContentSection1 {
  title: string;
  content: string | React.ReactElement | React.ReactElement[];
  image: string;
  isShowDivider?: boolean;
}

const TeaStoryHeroContentSection1 = (props: ITeaStoryHeroContentSection1) => {
  const { title, content, image, isShowDivider = false } = props;

  return (
    <Grid gridTemplateColumns={{ base: '1fr' }} gridTemplateRows={{ base: '1fr' }}>
      <Box gridColumn={{ base: '1/2' }} gridRow={{ base: '1/2' }}>
        <Image src={image} />
      </Box>

      <Grid gridColumn={{ base: '1/2' }} gridRow={{ base: '1/2' }} alignItems="center">
        <Container maxWidth="container.xl">
          <Box color="#fff">
            <Text textAlign="center" fontSize={['sm', 'md', 'lg', 'xl', '2xl', '3xl']}>
              {title}
            </Text>

            {isShowDivider && (
              <Divider
                height="2px"
                width="40px"
                margin={{ base: '24px auto 16px auto' }}
                backgroundColor="#fff"
                border="unset"
              />
            )}

            <Text margin={{ base: '24px 0' }}>{content}</Text>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};

export default TeaStoryHeroContentSection1;
