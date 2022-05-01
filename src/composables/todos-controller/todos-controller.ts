import {
  createTodos,
  delTodos,
  fetchTodos,
  updateTodos
} from '@/api/routes/todos';
import { Todos } from '@/models/types/todos';
import { useTodosStore } from '@/store/modules/todos/todos';

const store = useTodosStore();

export const getTodos = async (): Promise<void> => {
  const todos = await fetchTodos();
  store.setTodosState(todos);
};

export const setTodos = async (todo: Todos): Promise<void> => {
  await createTodos(todo);
  const todos = await fetchTodos();
  store.setTodosState(todos);
};

export const putTodos = async (todo: Todos): Promise<void> => {
  await updateTodos(todo);
  const todos = await fetchTodos();
  store.setTodosState(todos);
};

export const removeTodos = async (todo: Todos): Promise<void> => {
  await delTodos(todo.id);
  const todos = await fetchTodos();
  store.setTodosState(todos);
};
