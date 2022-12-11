import { useState, useEffect } from 'react';
import { Box, Button, IconButton, Input, HStack, VStack, useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { v4 as uuid } from 'uuid';
import TodoItem from '../todos/TodoItem';
import { TodoType, TodoProps } from '../../types/TodoType';
function TodoList(props: TodoProps) {
  const { hasLimit, placeholder } = props;
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<TodoType[] | null>(null);
  const [scratchPadTodos, setScratchPadTodos] = useState<TodoType[] | null>(null);
  const [scratchPadTodosMutable, setScratchPadTodosMutable] = useState<string[]>([]);
  const [moveToTodoDisable, setMoveToTodoDisable] = useState<boolean>(true);
  const toast = useToast();

  const TODO_THRESHOLD = 8;

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
    if (todos !== null) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    if (scratchPadTodos !== null)
      localStorage.setItem('scratchpad', JSON.stringify(scratchPadTodos));
  }, [scratchPadTodos]);

  // use this function in useeffect to get the updated list
  function sortComparator(a: any, b: any) {
    if (a.updatedAt > b.updatedAt) return -1;
    if (a.updatedAt < b.updatedAt) return 1;
    return 0;
  }
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  function deleteTask(id: string) {
    // here I need to find id that id and mark it true
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

        if (todosLocal.length > 1 && !canAddToTodoList()) {
          showErrorToast(
            'Todo list limit exceeded',
            'Maximum number of tasks per day already here. Good luck completing them',
          );
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

  function moveToTodoListAndRemoveFromScratchPad(): void {
    // Here on click of this I need to loop scratchPadTodosMutable , move them to todo list if possible
    let couldMoveTolist = moveToTodoList(scratchPadTodosMutable);
    //if the above passes only then removee from scratch pad
    if (couldMoveTolist) removefromScratchPad(scratchPadTodosMutable);
    setMoveToTodoDisable(true);
  }

  function moveToTodoList(ids: string[]): boolean {
    let temp: TodoType[] = [];
    // Here I have to check length open todos and ids should be less than 8
    let incompletedTasks = todos?.filter((todo) => todo.completed === false).length || 0;
    if (incompletedTasks + ids.length > 8) {
      showErrorToast('Cannot move to todolist', 'This may increase the number of todos');
      return false;
    }

    if (canAddToTodoList() && scratchPadTodos) {
      for (let i = 0; i < ids.length; i++) {
        temp.push(
          scratchPadTodos.filter((todo) => {
            return ids[i] === todo?.id;
          })[0],
        );
      }
      if (todos === null || todos?.length === 0) {
        setTodos(temp);
      }
      if (todos && temp) {
        let newARR = todos?.concat(temp);
        setTodos(newARR);
      }
      return true;
    } else {
      // show a toast that we cant add them to todolist. Check if todo list already has 8 items.
      showErrorToast(
        'Todo list limit exceeded',
        'Maximum number of tasks per day already here. Good luck completing them',
      );
      return false;
    }
  }
  function removefromScratchPad(ids: string[]): void {
    // loop over ids and remove them from scratchpad list
    let temp: TodoType[] = [];
    let indexes = [];
    if (scratchPadTodos) {
      for (let i = 0; i < scratchPadTodos.length; i++) {
        for (let j = 0; j < ids.length; j++) {
          if (ids[j] === scratchPadTodos[i].id) {
            indexes.push(i);
          }
        }
      }

      for (let i = 0; i < scratchPadTodos.length; i++) {
        if (!indexes.includes(i)) {
          temp.push(scratchPadTodos[i]);
        }
      }

      if (temp) {
        setScratchPadTodos(temp);
      }
    }

    // [1,2,3] [2,3]  should resut in [1]
    // I will find the indexes and then I will remove those indexes from array
  }

  function canAddToTodoList() {
    if (todos !== null) {
      let completedTasks = todos.filter((todo) => todo.completed === true).length;
      let tasksThatCanBeAdded = todos.length - completedTasks;
      return tasksThatCanBeAdded < TODO_THRESHOLD;
    }
    return false;
  }

  function showErrorToast(title: string, description: string) {
    toast({
      title: title,
      description: description,
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
    return;
  }
  return (
    <Box pt="2rem" position={'relative'} mt="8rem">
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
          <Button
            colorScheme="twitter"
            size="xs"
            alignSelf="flex-start"
            onClick={moveToTodoListAndRemoveFromScratchPad}
            isDisabled={moveToTodoDisable}
          >
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
                setMoveToTodoDisable={setMoveToTodoDisable}
              />
            ))}
      </VStack>
    </Box>
  );
}
export default TodoList;
