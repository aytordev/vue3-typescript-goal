import { del, get, post, put } from '@/api/http-client';
import { Todos } from '@/models/types/todos';

export const fetchTodos = async (): Promise<Todos[]> => {
  const response = await get<Todos[]>('/todos');
  return response.data;
};

export const delTodos = async (id: string): Promise<any> => {
  return await del(`/todos/${id}`);
};

export const updateTodos = async (movie: Todos): Promise<Todos> => {
  return await put(`/todos/${movie.id}`, movie);
};

export const createTodos = async (movie: Todos): Promise<any> => {
  return await post('/todos', movie);
};
