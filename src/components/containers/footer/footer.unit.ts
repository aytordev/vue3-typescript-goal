import '@testing-library/jest-dom';

import { useTodosStore } from '@/store/modules/todos/todos';
import { render, screen } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import footer from './footer.vue';
import userEvent from '@testing-library/user-event';

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

    render(footer);

    const total = screen.getByLabelText('total').textContent;

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

    render(footer);

    const total = screen.getByLabelText('total').textContent;

    expect(total).toBe('1 item left');
  });

  it('If route is not /active, button is not selected', async () => {
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

    render(footer);

    const active = screen.getByLabelText('active');

    userEvent.click(active);

    expect(active).not.toHaveClass('selected');
  });

  it('If route is not /completed, button is not selected', async () => {
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

    render(footer);

    const completed = screen.getByLabelText('completed');

    userEvent.click(completed);

    expect(completed).not.toHaveClass('selected');
  });

  it('If route is /, button is selected', async () => {
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

    render(footer);

    const all = screen.getByLabelText('all');

    expect(all).toHaveClass('selected');
  });

  it('If store is empty clear is not visible', async () => {
    const todoStore = useTodosStore();

    todoStore.$state = {
      todos: [],
    };

    render(footer);

    const clear = screen.getByLabelText('clear');

    expect(clear).not.toBeVisible();
  });
});
