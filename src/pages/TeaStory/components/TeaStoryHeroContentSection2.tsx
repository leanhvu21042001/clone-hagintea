import { Box, Divider, Grid, Text } from '@chakra-ui/react';
import React from 'react';

interface ITeaStoryHeroContentSection2 {
  title: string;
  content: string | React.ReactElement | React.ReactElement[];
  image: string;
  isShowDivider?: boolean;
  isLeft?: boolean;
}

const TeaStoryHeroContentSection2 = (
  props: ITeaStoryHeroContentSection2,
): React.ReactElement => {
  const { title, content, image, isShowDivider = false, isLeft = true } = props;

  return (
    <Grid
      gridTemplateColumns={{ base: '1fr' }}
      gridTemplateRows={{ base: '1fr' }}
      backgroundImage={image}
    >
      <Grid
        gridColumn={{ base: '1/2' }}
        gridRow={{ base: '1/2' }}
        placeContent="center"
        maxWidth={{ base: '50%' }}
        marginLeft={isLeft ? 'unset' : 'auto'}
      >
        <Box color="#fff" padding={{ base: '160px 0px 160px  100px' }}>
          <Text fontSize={['sm', 'md', 'lg', 'xl', '2xl', '3xl']} textAlign="center">
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

          {content}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TeaStoryHeroContentSection2;
