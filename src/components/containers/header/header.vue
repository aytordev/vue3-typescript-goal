<script lang="ts" setup>
  import inputVue from '@/components/shared/input/input.vue';
import {
putListOfTodos,
setTodos
} from '@/composables/todos-controller/todos-controller';
import { Todos } from '@/models/types/todos';
import { useTodosStore } from '@/store/modules/todos/todos';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';

  const store = useTodosStore();
  const { todos } = storeToRefs(store);

  const todo = reactive<Todos>({
    id: 0,
    description: '',
    completed: false,
  });

  const query = async () => {
    setTodos(todo);
    todo.description = '';
  };

  const log = async () => await putListOfTodos(todos.value);
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
  .todoapp input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .todoapp input::-moz-placeholder {
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
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }

  .toggle-all {
    text-align: center;
    border: none;
    /* Mobile Safari */
    opacity: 0;
    position: absolute;
  }

  .toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    // top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    z-index: 3;
  }

  .toggle-all + label:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  .toggle-all:checked + label:before {
    color: #737373;
  }
</style>
