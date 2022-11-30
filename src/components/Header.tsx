import { Button, HStack, IconButton, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { FcTodoList } from 'react-icons/fc';
import { SlNotebook } from 'react-icons/sl';
import { Link } from 'react-router-dom';
function Header() {
  const [todoActive, setTodoActive] = useState(true);
  const [scratchpadActive, setScratchpadActive] = useState(false);

  function setActiveButton(activeButton: string) {
    if (activeButton === 'todo') {
      setTodoActive(true);
      setScratchpadActive(false);
    } else {
      setTodoActive(false);
      setScratchpadActive(true);
    }
  }
  return (
    <VStack w="100%" bg="blue.100" pt={[16, 8, 2, 2]} pb="1rem" mb="2rem">
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
