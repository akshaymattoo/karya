import { Box, Image } from '@chakra-ui/react';
import logo from '/assets/logo.png';

export default function LogoHeader() {
  return (
    <Box pt={[8, 3, 1, 1]} bg="blue.200" position={'fixed'} w="100%">
      <Image boxSize={'60px'} src={logo} alt="logo" />
    </Box>
  );
}