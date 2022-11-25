import { Button, HStack, IconButton, VStack } from '@chakra-ui/react';
import { FcTodoList } from 'react-icons/fc';
import { SlNotebook } from 'react-icons/sl';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <VStack mb="2rem" mt="1rem">
      <HStack>
        <Link to="/">
          <Button leftIcon={<FcTodoList />} variant="solid">
            Todo list
          </Button>
        </Link>
        <Link to="/scratchpad">
          <Button leftIcon={<SlNotebook />} variant="solid">
            Scratchpad
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
}

export default Header;
