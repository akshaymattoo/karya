import { Icon } from '@chakra-ui/icons';
import { Text, HStack, VStack } from '@chakra-ui/react';
import { FcTodoList, FcList, FcInspection } from 'react-icons/fc';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MobileNav() {
  const [allActive, setAllActive] = useState(true);
  const [todoActive, setTodoActive] = useState(false);
  const [scratchpadActive, setScratchpadActive] = useState(false);

  const pathname = useLocation().pathname;

  useEffect(() => {
    if (pathname === '/alltodos') {
      setAllActive(false);
      setTodoActive(true);
      setScratchpadActive(true);
    } else if (pathname === '/todos') {
      setTodoActive(false);
      setAllActive(true);
      setScratchpadActive(true);
    } else if (pathname === '/scratchpad') {
      setTodoActive(true);
      setAllActive(true);
      setScratchpadActive(false);
    }
  }, [pathname]);

  function setActiveButton(activeButton: string) {
    if (activeButton === 'all') {
      setAllActive(false);
      setTodoActive(true);
      setScratchpadActive(true);
    } else if (pathname === 'todo') {
      setTodoActive(false);
      setAllActive(true);
      setScratchpadActive(true);
    } else if (pathname === 'scp') {
      setTodoActive(true);
      setAllActive(true);
      setScratchpadActive(false);
    }
  }
  return (
    <HStack
      display={'flex'}
      direction={'row'}
      justifyContent={'space-around'}
      pb={8}
      pt={2}
      bg="gray.50"
      position={'fixed'}
      left={0}
      bottom={0}
      width={'100%'}
    >
      <VStack p={2} onClick={() => setActiveButton('all')}>
        <Link to="/alltodos">
          <Icon as={FcList} />
          <Text
            size="xs"
            bgGradient={!allActive ? 'linear(to-l, #7928CA, #FF0080)' : 'linear(to-l, #000, #000)'}
            bgClip="text"
          >
            All
          </Text>
        </Link>
      </VStack>
      <VStack onClick={() => setActiveButton('todo')}>
        <Link to="/todos">
          <Icon as={FcTodoList} />
          <Text
            size="xs"
            bgGradient={!todoActive ? 'linear(to-l, #7928CA, #FF0080)' : 'linear(to-l, #000, #000)'}
            bgClip="text"
          >
            To-dos
          </Text>
        </Link>
      </VStack>
      <VStack onClick={() => setActiveButton('scp')}>
        <Link to="/scratchpad">
          <Icon as={FcInspection} />
          <Text
            size="xs"
            bgGradient={
              !scratchpadActive ? 'linear(to-l, #7928CA, #FF0080)' : 'linear(to-l, #000, #000)'
            }
            bgClip="text"
          >
            Scratch pad
          </Text>
        </Link>
      </VStack>
    </HStack>
  );
}
export default MobileNav;
