import { Icon } from '@chakra-ui/icons';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import { FcTodoList, FcList, FcInspection } from 'react-icons/fc';
import { Link, useLocation } from 'react-router-dom';

function MobileNav() {
  return (
    <HStack
      display={'flex'}
      direction={'row'}
      justifyContent={'space-around'}
      pb={8}
      pt={2}
      bg="gray.100"
      position={'fixed'}
      left={0}
      bottom={0}
      width={'100%'}
    >
      <VStack>
        <Link to="/alltodos">
          <Icon as={FcList} />
          <Heading as="h6" size="xs">
            All
          </Heading>
        </Link>
      </VStack>
      <VStack>
        <Link to="/todos">
          <Icon as={FcTodoList} />
          <Heading as="h6" size="xs">
            To-dos
          </Heading>
        </Link>
      </VStack>
      <VStack>
        <Link to="/scratchpad">
          <Icon as={FcInspection} />
          <Heading as="h6" size="xs">
            Scratch pad
          </Heading>
        </Link>
      </VStack>
    </HStack>
  );
}
export default MobileNav;
