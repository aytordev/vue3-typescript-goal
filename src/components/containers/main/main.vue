<script lang="ts" setup>
  import item from '@/components/shared/item/item.vue';
  import {
    getTodos,
    putTodos,
    removeTodos,
  } from '@/composables/todos-controller/todos-controller';
  import { Todos } from '@/models/types/todos';
  import router from '@/router';
  import { useTodosStore } from '@/store/modules/todos/todos';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';

  const store = useTodosStore();
  const { todos, active, completed } = storeToRefs(store);
  const route = router.currentRoute.value;

  const todoChecked = (emitted: Todos) => putTodos(emitted);
  const todoDeleted = (emitted: Todos) => removeTodos(emitted);
  const todoModified = (emitted: Todos) => putTodos(emitted);

  const getActive = async () => {
    await getTodos();
    await store.setTodosState(active.value);
  };
  const getCompleted = async () => {
    await getTodos();
    await store.setTodosState(completed.value);
  };

  onMounted(async () => {
    route.path === '/'
      ? await getTodos()
      : route.path === '/active'
      ? getActive()
      : getCompleted();
  });
</script>

<template>
  <item
    v-for="todoElement in todos"
    :key="todoElement.id"
    :todo="todoElement"
    aria-label="main"
    @todo-to-be-checked="todoChecked"
    @todo-to-be-deleted="todoDeleted"
    @todo-to-be-modified="todoModified"
  />
</template>
