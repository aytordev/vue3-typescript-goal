import {
  createTodos,
  delTodos,
  fetchTodos,
  updateTodos,
} from '@/api/routes/todos';
import { Todos } from '@/models/types/todos';
import { useTodosStore } from '@/store/modules/todos/todos';

export const getTodos = async (): Promise<void> => {
  const store = useTodosStore();

  const todos = await fetchTodos();
  store.setTodosState(todos);
};

export const setTodos = async (todo: Todos): Promise<void> => {
  const store = useTodosStore();

  await createTodos(todo);
  const todos = await fetchTodos();
  store.setTodosState(todos);
};

export const putTodos = async (todo: Todos): Promise<void> => {
  const store = useTodosStore();

  await updateTodos(todo);
  const todos = await fetchTodos();
  store.setTodosState(todos);
};

export const removeTodos = async (todo: Todos): Promise<void> => {
  const store = useTodosStore();

  await delTodos(todo.id);
  const todos = await fetchTodos();
  store.setTodosState(todos);
};
