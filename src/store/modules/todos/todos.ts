import { Todos } from '@/models/types/todos';
import { defineStore } from 'pinia';

type TodosState = {
  todos: null | Todos[];
};

export const useTodosStore = defineStore('todos', {
  state: (): TodosState => ({
    todos: null,
  }),

  getters: {
    total(): number {
      if (this.todos === null) return 0;
      return this.todos.length;
    },

    active(): Todos[] {
      if (this.todos === null) {
        this.todos = [];
      }
      return this.todos.filter((todo) => !todo.completed);
    },

    completed(): Todos[] {
      if (this.todos === null) {
        this.todos = [];
      }
      return this.todos.filter((todo) => todo.completed);
    },
  },

  actions: {
    setTodosState(todosFromDatabase: Todos[]) {
      this.todos = todosFromDatabase;
    },
    setTodosActive() {
      this.todos = this.active;
    },
    setTodosCompleted() {
      this.todos = this.completed;
    },
  },
});
