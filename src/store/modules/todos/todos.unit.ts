import { Todos } from '@/models/types/todos';
import { createPinia, setActivePinia } from 'pinia';
import { useTodosStore } from './todos';

describe('Movies store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    const cartStore = useTodosStore();
    cartStore.$reset();
  });

  it('Update store when a todo is recieved', async () => {
    const todosMock: Todos[] = [
      {
        id: 1,
        description: 'Task #1',
        completed: true,
      },
    ];

    const cartStore = useTodosStore();

    cartStore.setTodosState(todosMock);

    expect(cartStore.$state.todos?.length).toBe(1);
  });
});
