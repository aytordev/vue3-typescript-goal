import '@testing-library/jest-dom';

import { useTodosStore } from '@/store/modules/todos/todos';
import { render, screen } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import footer from './footer.vue';

describe('footer', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    const store = useTodosStore();
    store.$reset();
  });

  it('If store have more than 1 elements total render "items"', async () => {
    const todoStore = useTodosStore();

    todoStore.$state = {
      todos: [
        {
          id: 1,
          description: 'Task #1',
          completed: false,
        },
        {
          id: 2,
          description: 'Task #1',
          completed: false,
        },
        {
          id: 3,
          description: 'Task #1',
          completed: true,
        },
      ],
    };

    render(footer, { store: todoStore });

    const total = screen.getByLabelText('total');

    expect(total).toBe('3 items left');
  });

  it('If store have more than 1 elements total render "item"', async () => {
    const todoStore = useTodosStore();

    todoStore.$state = {
      todos: [
        {
          id: 1,
          description: 'Task #1',
          completed: false,
        },
      ],
    };

    render(footer, { store: todoStore });

    const total = screen.getByLabelText('total');

    expect(total).toBe('1 item left');
  });

  it('When click on active button it be setted as selected', async () => {
    const todoStore = useTodosStore();

    todoStore.$state = {
      todos: [
        {
          id: 1,
          description: 'Task #1',
          completed: false,
        },
        {
          id: 2,
          description: 'Task #1',
          completed: false,
        },
        {
          id: 3,
          description: 'Task #1',
          completed: true,
        },
      ],
    };

    render(footer, { store: todoStore });

    const active = screen.getByLabelText('active');

    expect(active).toHaveClass('selected');
  });

  it('When click on completed button it be setted as selected', async () => {
    const todoStore = useTodosStore();

    todoStore.$state = {
      todos: [
        {
          id: 1,
          description: 'Task #1',
          completed: false,
        },
        {
          id: 2,
          description: 'Task #1',
          completed: false,
        },
        {
          id: 3,
          description: 'Task #1',
          completed: true,
        },
      ],
    };

    render(footer, { store: todoStore });

    const completed = screen.getByLabelText('completed');

    expect(completed).toHaveClass('selected');
  });

  it('When click on all button it be setted as selected', async () => {
    const todoStore = useTodosStore();

    todoStore.$state = {
      todos: [
        {
          id: 1,
          description: 'Task #1',
          completed: false,
        },
        {
          id: 2,
          description: 'Task #1',
          completed: false,
        },
        {
          id: 3,
          description: 'Task #1',
          completed: true,
        },
      ],
    };

    render(footer, { store: todoStore });

    const all = screen.getByLabelText('all');

    expect(all).toHaveClass('selected');
  });

  it('If store is empty clear is not visible', async () => {
    const todoStore = useTodosStore();

    todoStore.$state = {
      todos: [],
    };

    render(footer, { store: todoStore });

    const clear = screen.getByLabelText('clear');

    expect(clear).not.toBeVisible();
  });
});
