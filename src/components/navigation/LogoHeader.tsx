import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import logo from '/assets/logo.png';

export default function LogoHeader() {
  return (
    <Box p="2" bg="blue.200">
      <Image boxSize={'60px'} src={logo} alt="logo" />
    </Box>
  );
}
