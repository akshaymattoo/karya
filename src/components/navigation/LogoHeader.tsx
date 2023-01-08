import { Box, Image } from '@chakra-ui/react';
import logoColor from '/assets/h-logo.png';

export default function LogoHeader() {
  return (
    <Box pt={[8, 3, 1, 1]} ml={10} position={'fixed'} w="100%">
      <Image width={'50px'} objectFit="cover" src={logoColor} />
    </Box>
  );
}
