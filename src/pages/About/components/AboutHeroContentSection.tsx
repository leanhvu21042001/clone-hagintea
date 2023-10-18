import React from 'react';

import { Box, Container, Divider, Grid, Image, Text } from '@chakra-ui/react';

interface IAboutHeroContentSection {
  index?: number;
  title: string;
  content: string;
  image: string;
  isShowDivider?: boolean;
}

const AboutHeroContentSection = (props: IAboutHeroContentSection) => {
  const { title, content, image, isShowDivider = false, index } = props;

  const paddingTop =
    index === 0 ? { xl: 'none', lg: 'none', md: 'none', sm: '90px', base: '90px' } : {};

  return (
    <Grid gridTemplateColumns={{ base: '1fr' }} gridTemplateRows={{ base: '1fr' }}>
      <Box gridColumn={{ base: '1/2' }} gridRow={{ base: '1/2' }}>
        <Image src={image} height="100%" objectFit="cover" />
      </Box>

      <Grid
        gridColumn={{ base: '1/2' }}
        gridRow={{ base: '1/2' }}
        alignItems="center"
        paddingTop={paddingTop}
      >
        <Container maxWidth="container.lg">
          <Box padding={{ base: '30px' }} color="#fff">
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

export default AboutHeroContentSection;
