import { VStack, Image } from '@chakra-ui/react';
import logoColor from '/assets/h-logo.png';
function EmptyHeader() {
  return (
    <VStack
      w="100%"
      bg={'gray.50'}
      pt={[3, 3, 2, 2]}
      pb="0.5rem"
      mb="rem"
      position={'fixed'}
      zIndex={100}
      display={'flex'}
      alignItems={'flex-start'}
      pl="1rem"
    >
      <Image width={'50px'} objectFit="cover" src={logoColor} />
    </VStack>
  );
}

export default EmptyHeader;
