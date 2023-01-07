import { Text, VStack } from '@chakra-ui/react';

function EmptyHeader() {
  return (
    <VStack
      w="100%"
      bg="gray.200"
      pt={[8, 8, 2, 2]}
      pb="0.5rem"
      mb="rem"
      position={'fixed'}
      zIndex={100}
      display={'flex'}
      alignItems={'flex-start'}
      pl="1rem"
    >
      <Text fontSize="2xl" as="i">
        karya
      </Text>
    </VStack>
  );
}

export default EmptyHeader;