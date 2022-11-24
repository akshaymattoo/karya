import { useState, useEffect } from 'react';
import { Box, Button, IconButton, Input, HStack, VStack, useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { v4 as uuid } from 'uuid';
import TodoItem from './TodoItem';
import { TodoType, TodoProps } from '../types/TodoType';

function TodoList(props: TodoProps) {
  const { hasLimit, placeholder } = props;
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<TodoType[] | null>(null);
  const [scratchPadTodos, setScratchPadTodos] = useState<TodoType[] | null>(null);
  const [scratchPadTodosMutable, setScratchPadTodosMutable] = useState<string[]>([]);
  const toast = useToast();

  useEffect(() => {
    let todosLS = localStorage.getItem('todos');

    if (todosLS) {
      setTodos(JSON.parse(todosLS));
    } else {
      localStorage.setItem('todos', '[]');
    }

    let scratchpad = localStorage.getItem('scratchpad');
    if (scratchpad) {
      setScratchPadTodos(JSON.parse(scratchpad));
    } else {
      localStorage.setItem('scratchpad', '[]');
    }
  }, []);

  useEffect(() => {
    if (todos !== null) localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (scratchPadTodos !== null)
      localStorage.setItem('scratchpad', JSON.stringify(scratchPadTodos));
  }, [scratchPadTodos]);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  function deleteTask(id: string) {
    // here I need to find id that id and mark it true
    console.log(id);
    let list = hasLimit
      ? todos?.filter((item) => item.id !== id)
      : scratchPadTodos?.filter((item) => item.id !== id);
    if (list) hasLimit ? setTodos(list) : setScratchPadTodos(list);
  }

  const submitTodo = () => {
    try {
      if (!value) {
        toast({
          title: 'Cannot be empty',
          description: 'Task cannot be empty',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      if (hasLimit && todos !== null) {
        let todosLocal = [...todos];
        todosLocal.push({
          id: uuid(),
          task: value,
          completed: false,
          color: '', //randomColor({ luminosity: 'light', format: 'hex' }),
          deleted: false,
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
        });
        let completedTasks = todosLocal.filter((todo) => todo.completed === true).length;
        let tasksThatCanBeAdded = todosLocal.length - completedTasks;

        if (tasksThatCanBeAdded > 8) {
          toast({
            title: 'Todo list limit exceeded',
            description: 'Maximum number of tasks per day already here. Good luck completing them',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
          return;
        }

        setTodos(todosLocal);
      } else {
        if (scratchPadTodos !== null) {
          let scratchPtodos = [...scratchPadTodos];
          scratchPtodos.push({
            id: uuid(),
            task: value,
            completed: false,
            color: '', //randomColor({ luminosity: 'light', format: 'hex' }),
            deleted: false,
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString(),
          });
          setScratchPadTodos(scratchPtodos);
        }
      }
    } finally {
      setValue('');
    }
  };

  function moveToTodoList() {
    console.log(scratchPadTodos, scratchPadTodos?.length);
    console.log(todos, todos?.length);
  }
  return (
    <Box pt="2rem">
      <HStack pl="1rem" pr="1rem">
        <Input
          color="black"
          variant="flushed"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <IconButton
          size="sm"
          isRound={true}
          aria-label="Search database"
          icon={<AddIcon />}
          onClick={submitTodo}
        />
      </HStack>

      {/** Show this button only for scrathpad */}
      <VStack p="1rem" spacing="2rem">
        {!hasLimit && (
          <Button size="xs" alignSelf="flex-start" onClick={moveToTodoList}>
            Move to Todolist
          </Button>
        )}
        {hasLimit
          ? todos?.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTask={deleteTask}
                hasLimit={hasLimit}
                setTodos={setTodos}
              />
            ))
          : scratchPadTodos?.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTask={deleteTask}
                hasLimit={hasLimit}
                scratchPadTodosMutable={scratchPadTodosMutable}
                setScratchPadTodosMutable={setScratchPadTodosMutable}
                setScratchPadTodos={setScratchPadTodos}
              />
            ))}
      </VStack>
    </Box>
  );
}
export default TodoList;
