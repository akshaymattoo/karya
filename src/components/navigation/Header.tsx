import { Button, HStack, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FcHome, FcTodoList, FcList } from 'react-icons/fc';
import { SlNotebook } from 'react-icons/sl';
import { Link, useLocation } from 'react-router-dom';
function Header() {
  const [homeActive, setHomeActive] = useState(true);
  const [todoActive, setTodoActive] = useState(false);
  const [scratchpadActive, setScratchpadActive] = useState(false);
  const [allTodosActive, setAllTodosActive] = useState(false);

  const pathname = useLocation().pathname;

  useEffect(() => {
    if (pathname === '/') {
      setHomeActive(false);
      setTodoActive(true);
      setScratchpadActive(true);
      setAllTodosActive(true);
    } else if (pathname === '/todos') {
      setTodoActive(false);
      setHomeActive(true);
      setScratchpadActive(true);
      setAllTodosActive(true);
    } else if (pathname === '/scratchpad') {
      setTodoActive(true);
      setHomeActive(true);
      setAllTodosActive(true);
      setScratchpadActive(false);
    } else if (pathname === '/alltodos') {
      setTodoActive(true);
      setHomeActive(true);
      setScratchpadActive(true);
      setAllTodosActive(false);
    }
  }, [pathname]);

  function setActiveButton(activeButton: string) {
    if (activeButton === 'home') {
      setHomeActive(false);
      setTodoActive(true);
      setScratchpadActive(true);
      setAllTodosActive(true);
    } else if (pathname === 'todo') {
      setTodoActive(false);
      setHomeActive(true);
      setScratchpadActive(true);
      setAllTodosActive(true);
    } else if (pathname === 'scp') {
      setTodoActive(true);
      setHomeActive(true);
      setScratchpadActive(false);
    } else if (pathname === 'all') {
      setTodoActive(true);
      setHomeActive(true);
      setScratchpadActive(true);
      setAllTodosActive(false);
    }
  }
  return (
    <VStack
      w="100%"
      bg="blue.200"
      pt={[14, 2, 2, 2]}
      pb="1rem"
      mb="2rem"
      position={'fixed'}
      zIndex={100}
    >
      <HStack>
        <Link to="/">
          <Button
            leftIcon={<FcHome />}
            variant="solid"
            isActive={homeActive}
            onClick={() => setActiveButton('home')}
          >
            Home
          </Button>
        </Link>
        <Link to="/todos">
          <Button
            leftIcon={<FcTodoList />}
            variant="solid"
            isActive={todoActive}
            onClick={() => setActiveButton('todo')}
          >
            Todos
          </Button>
        </Link>
        <Link to="/scratchpad">
          <Button
            leftIcon={<SlNotebook />}
            variant="solid"
            isActive={scratchpadActive}
            onClick={() => setActiveButton('scp')}
          >
            Scratch pad
          </Button>
        </Link>
        <Link to="/alltodos">
          <Button
            leftIcon={<FcList />}
            variant="solid"
            isActive={allTodosActive}
            onClick={() => setActiveButton('all')}
          >
            All todos
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
}

export default Header;
