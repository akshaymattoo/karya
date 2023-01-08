import { Box, Image } from '@chakra-ui/react';
import logo from '/assets/logo.png';
import logoColor from '/assets/logo-color.png';

export default function LogoHeader() {
  return (
    <Box pt={[8, 3, 1, 1]} ml={10} position={'fixed'} w="100%">
      <Image width={'50px'} objectFit="cover" src={logoColor} />
    </Box>
  );
}
