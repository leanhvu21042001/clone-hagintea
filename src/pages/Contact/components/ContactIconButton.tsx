import { IconButton } from '@chakra-ui/react';
import React from 'react';

interface IContactIconButton {
  children: React.ReactElement | React.ReactElement[];
  bgColor: string;
  ariaLabel: string;
}

const ContactIconButton = (props: IContactIconButton) => {
  const { bgColor, ariaLabel, children } = props;
  return (
    <IconButton
      backgroundColor={bgColor}
      display="grid"
      placeContent="center"
      borderRadius="100%"
      width="36px"
      height="36px"
      minWidth="fit-content"
      aria-label={ariaLabel}
      _hover={{
        transform: 'scale(1.2)',
      }}
    >
      {children}
    </IconButton>
  );
};

export default ContactIconButton;
