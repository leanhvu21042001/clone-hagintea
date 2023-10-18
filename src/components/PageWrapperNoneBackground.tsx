import React from 'react';

import { Box } from '@chakra-ui/react';

interface IPageWrapperNoneBackground {
  children?: React.ReactElement | React.ReactElement[];
  className: string;
}

const PageWrapperNoneBackground = ({
  children,
  className = '',
}: IPageWrapperNoneBackground) => {
  return (
    <Box
      paddingTop={{ base: '200px' }}
      className={`page-wrapper-none-background ${className}`}
    >
      {children}
    </Box>
  );
};

export default PageWrapperNoneBackground;
