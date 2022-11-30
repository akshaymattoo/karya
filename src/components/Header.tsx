import { Button, HStack, IconButton, VStack } from '@chakra-ui/react';
import { FcTodoList } from 'react-icons/fc';
import { SlNotebook } from 'react-icons/sl';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <VStack w="100%" bg="gray.100" p={[8, 8, 2, 2]} position="fixed">
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
