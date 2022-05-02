import { del, get, post, put } from '@/api/http-client';
import { Todos } from '@/models/types/todos';

export const fetchTodos = async (): Promise<Todos[]> => {
  const response = await get<Todos[]>('/todos');
  return response.data;
};

export const delTodos = async (id: number): Promise<any> => {
  return await del(`/todos/${id}`);
};

export const updateTodos = async (todo: Todos): Promise<Todos> => {
  return await put(`/todos/${todo.id}`, todo);
};

export const createTodos = async (todo: Todos): Promise<any> => {
  return await post('/todos', todo);
};
