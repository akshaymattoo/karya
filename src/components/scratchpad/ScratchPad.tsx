import { Box, useMediaQuery } from '@chakra-ui/react';
import TodoList from '../todolist/TodoList';
import Header from '../navigation/Header';
import MobileNav from '../navigation/MobileNav';
import EmptyHeader from '../navigation/EmptyHeader';

export default function ScratchPad() {
  const [isLargerThan62] = useMediaQuery('(min-width: 33em)');

  return (
    <>
      {isLargerThan62 ? <Header /> : <EmptyHeader />}
      <Box
        display={'flex'}
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        p={[2, 2, 0, 0]}
      >
        <Box
          bg="#F9F8F8"
          w={[
            '100%', // 0-30em
            '100%', // 30em-48em
            '80%', // 48em-62em
            '60%',
          ]}
          maxW="100%"
          borderRadius="12px"
          boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        >
          <TodoList hasLimit={false} placeholder={'enter scratch pad item'} />
        </Box>
      </Box>
      {!isLargerThan62 && <MobileNav />}
    </>
  );
}
