<script lang="ts" setup>
  import inputVue from '@/components/shared/input/input.vue';
import {
getTodos,
putTodos,
setTodos
} from '@/composables/todos-controller/todos-controller';
import { Todos } from '@/models/types/todos';
import { useTodosStore } from '@/store/modules/todos/todos';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';

  const store = useTodosStore();
  const { all } = storeToRefs(store);

  const todo = reactive<Todos>({
    id: 0,
    description: '',
    completed: false,
  });

  const query = async () => {
    setTodos(todo);
    todo.description = '';
  };

  const log = async () => {
    const checkState = all.value.filter((todo) => todo.completed).length > 0;
    await all.value.map((todo) =>
      putTodos({
        ...todo,
        completed: !checkState,
      })
    );

    await getTodos();
  };
</script>

<template>
  <input id="" type="checkbox" name="" class="toggle-all" />
  <label for="" @click="log"></label>
  <inputVue
    ref="todosRef"
    :model-value="todo.description"
    type="text"
    class="new-todo"
    autofocus
    @input="(event: any) => (todo.description = event.target.value)"
    @keydown.enter="query"
  />
</template>

<style lang="scss" scoped>
  .todoapp input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .todoapp input::placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .todoapp input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .new-todo {
    padding: 16px 16px 16px 60px;
    background: rgb(0 0 0 / 0.3%);
    border: none;
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  }

  .toggle-all {
    position: absolute;
    text-align: center;
    border: none;

    /* Mobile Safari */
    opacity: 0;
  }

  .toggle-all + label {
    position: absolute;

    // top: -52px;
    left: -13px;
    z-index: 3;
    width: 60px;
    height: 34px;
    font-size: 0;
    transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .toggle-all + label::before {
    padding: 10px 27px;
    font-size: 22px;
    color: #e6e6e6;
    content: '❯';
  }

  .toggle-all:checked + label::before {
    color: #737373;
  }
</style>
