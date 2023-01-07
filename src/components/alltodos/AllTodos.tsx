import { useState, useEffect } from 'react';
import { VStack, useMediaQuery, Box } from '@chakra-ui/react';
import Header from '../navigation/Header';
import EmptyHeader from '../navigation/EmptyHeader';
import MobileNav from '../navigation/MobileNav';
import { TodoType } from '../../types/TodoType';
import { arrangeItems } from '../../utils/utils';
import TodoItem from '../todos/TodoItem';

export default function AllTodos() {
  const [allTodos, setAllTodos] = useState<TodoType[] | null>(null);
  const [isLargerThan62] = useMediaQuery('(min-width: 33em)');

  useEffect(() => {
    let todosLS = localStorage.getItem('todos');
    const tds = JSON.parse(todosLS);
    let scratchpad = localStorage.getItem('scratchpad');
    const scps = JSON.parse(scratchpad);
    const allT = arrangeItems([...tds, ...scps]);

    setAllTodos(allT);
  }, []);
  return (
    <>
      {isLargerThan62 ? <Header /> : <EmptyHeader />}

      <VStack pl="1rem" pr="1rem" pt="10rem" spacing="2rem">
        {allTodos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTask={() => {
              console.log('hjhd');
            }}
            hasLimit={true}
            showButtons={false}
            setTodos={() => {
              console.log('hjhd');
            }}
          />
        ))}
      </VStack>

      {!isLargerThan62 && <MobileNav />}
    </>
  );
}