import { Todos } from '@/models/types/todos';
import { createPinia, setActivePinia } from 'pinia';
import { useTodosStore } from './todos';

describe('Todos store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    const todoStore = useTodosStore();
    todoStore.$reset();
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

  it('Get total of todos stored in state', async () => {
    const todosMock: Todos[] = [
      {
        id: 1,
        description: 'Task #1',
        completed: true,
      },
    ];

    const cartStore = useTodosStore();

    cartStore.setTodosState(todosMock);

    expect(cartStore.total).toBe(1);
  });

  it('Get todos stored in state without filtering', async () => {
    const todosMock: Todos[] = [
      {
        id: 1,
        description: 'Task #1',
        completed: true,
      },
    ];

    const cartStore = useTodosStore();

    cartStore.setTodosState(todosMock);

    expect(cartStore.all.length).toBe(1);
  });

  it('Get todos stored in state filtered by completion', async () => {
    const todosMock: Todos[] = [
      {
        id: 1,
        description: 'Task #1',
        completed: true,
      },
    ];

    const cartStore = useTodosStore();

    cartStore.setTodosState(todosMock);

    expect(cartStore.completed.length).toBe(1);
  });

  it('Get active todos stored in state', async () => {
    const todosMock: Todos[] = [
      {
        id: 1,
        description: 'Task #1',
        completed: true,
      },
    ];

    const cartStore = useTodosStore();

    cartStore.setTodosState(todosMock);

    expect(cartStore.active.length).toBe(0);
  });
});
