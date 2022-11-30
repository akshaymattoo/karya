import { Button, HStack, IconButton, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FcTodoList } from 'react-icons/fc';
import { SlNotebook } from 'react-icons/sl';
import { Link, useLocation } from 'react-router-dom';
function Header() {
  const [todoActive, setTodoActive] = useState(true);
  const [scratchpadActive, setScratchpadActive] = useState(false);
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (pathname === '/') {
      setTodoActive(true);
      setScratchpadActive(false);
    } else {
      console.log('isnde sc');
      setTodoActive(false);
      setScratchpadActive(true);
    }
  }, [pathname]);
  function setActiveButton(activeButton: string) {
    if (activeButton === 'todo') {
      setTodoActive(true);
      setScratchpadActive(false);
    } else {
      console.log('isnde sc');
      setTodoActive(false);
      setScratchpadActive(true);
    }
  }
  return (
    <VStack w="100%" bg="blue.100" pt={[16, 8, 2, 2]} pb="1rem" mb="2rem" position={'fixed'}>
      <HStack>
        <Link to="/">
          <Button
            leftIcon={<FcTodoList />}
            variant="solid"
            isActive={todoActive}
            onClick={() => setActiveButton('todo')}
          >
            Todo list
          </Button>
        </Link>
        <Link to="/scratchpad">
          <Button
            leftIcon={<SlNotebook />}
            variant="solid"
            isActive={scratchpadActive}
            onClick={() => setActiveButton('scp')}
          >
            Scratchpad
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
}

export default Header;
