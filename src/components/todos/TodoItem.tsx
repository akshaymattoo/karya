import { IconButton, HStack, Button, Checkbox } from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CheckIcon } from '@chakra-ui/icons';
import { useEffect, useRef, useState } from 'react';
import { AutoResizeTextarea } from '../AutoResizeTextArea';
import { TodoType } from '../../types/TodoType';
function TodoItem({
  todo,
  deleteTask,
  hasLimit,
  scratchPadTodosMutable,
  setScratchPadTodosMutable,
  setTodos,
  setScratchPadTodos,
  setMoveToTodoDisable,
}: any) {
  const [todoinline, setTodoinline] = useState<TodoType>(todo);
  const [isReadOnly, setIsReadOnly] = useState<boolean>(true);
  const [updatedTodo, setupdatedTodo] = useState<string>(todoinline.task);
  const inputRef = useRef<any>();

  useEffect(() => {
    if (scratchPadTodosMutable) {
      if (scratchPadTodosMutable?.length) setMoveToTodoDisable(false);
      else setMoveToTodoDisable(true);
    }
  }, [scratchPadTodosMutable]);

  function editItem() {
    if (inputRef.current) {
      inputRef.current.selectionStart = inputRef.current.value.length;
      inputRef.current.selectionEnd = inputRef.current.value.length;
      inputRef.current.focus();
    }
    setIsReadOnly(false);
    setTodoinline({
      ...todoinline,
      task: 'mango',
    });
  }
  function markComplete() {
    setTodoinline({
      ...todoinline,
      completed: true,
    });

    let todos: any = hasLimit
      ? JSON.parse(localStorage.getItem('todos') || '')
      : JSON.parse(localStorage.getItem('scratchpad') || '');

    if (todos) {
      let filteredTodo: TodoType = todos.filter((todo: TodoType) => {
        return todo.id === todoinline.id;
      })[0];
      filteredTodo.completed = true;
      filteredTodo.updatedAt = new Date().toLocaleString();
      let restTodos = todos.filter((todo: TodoType) => {
        return todo.id !== todoinline.id;
      });
      todos = [...restTodos, ...[filteredTodo]];
      if (hasLimit) {
        setTodos(todos);
      } else {
        setScratchPadTodos(todos);
      }
    }
  }

  function changeTodo(event: any) {
    setupdatedTodo(event.target.value);
  }

  function updateTodo() {
    setIsReadOnly(true);
    // here I need to update the record as well in local storage
    let todos: any = hasLimit
      ? JSON.parse(localStorage.getItem('todos') || '')
      : JSON.parse(localStorage.getItem('scratchpad') || '');

    if (todos) {
      let filteredTodo: TodoType = todos.filter((todo: TodoType) => {
        return todo.id === todoinline.id;
      })[0];
      filteredTodo.task = updatedTodo;
      filteredTodo.updatedAt = new Date().toLocaleString();
      let restTodos = todos.filter((todo: TodoType) => {
        return todo.id !== todoinline.id;
      });
      todos = [...restTodos, ...[filteredTodo]];
      if (hasLimit) {
        setTodos(todos);
      } else {
        setScratchPadTodos(todos);
      }
    }
  }

  function alterScratchPadTodos(event: any, todoId: string) {
    if (event.target.checked) {
      setScratchPadTodosMutable([...scratchPadTodosMutable, todoId]);
    } else {
      setScratchPadTodosMutable(scratchPadTodosMutable.filter((todo: string) => todo !== todoId));
    }
  }
  return (
    <HStack w="100%" bg={todoinline.color}>
      <>
        {
          /** this check box is only for scratchpad */
          !hasLimit && !todoinline.completed && (
            <Checkbox
              defaultChecked={false}
              onChange={() => alterScratchPadTodos(event, todoinline.id)}
            ></Checkbox>
          )
        }
        <AutoResizeTextarea
          variant="flushed"
          color="black"
          key={todoinline.id}
          defaultValue={updatedTodo}
          onChange={changeTodo}
          isReadOnly={isReadOnly || todoinline.completed}
          ref={inputRef}
          sx={{
            textDecoration: todoinline.completed ? 'line-through' : 'none',
            rows: '1',
          }}
        />
        {isReadOnly && (
          <>
            {!todoinline.completed && (
              <>
                <IconButton
                  size="sm"
                  isRound={true}
                  aria-label="edit todo task"
                  icon={<EditIcon />}
                  onClick={editItem}
                />
                <IconButton
                  size="sm"
                  isRound={true}
                  aria-label="mark todo ask complete"
                  icon={<CheckIcon />}
                  onClick={markComplete}
                />
              </>
            )}
            <IconButton
              size="sm"
              isRound={true}
              aria-label="delte todo task"
              icon={<DeleteIcon />}
              onClick={() => deleteTask(todoinline.id)}
            />
          </>
        )}
      </>
      {!isReadOnly && (
        <>
          <Button colorScheme="twitter" size="xs" onClick={updateTodo} p="0.8rem">
            Update
          </Button>

          <Button colorScheme="orange" size="xs" p="0.8rem" onClick={() => setIsReadOnly(true)}>
            Cancel
          </Button>
        </>
      )}
    </HStack>
  );
}

export default TodoItem;
