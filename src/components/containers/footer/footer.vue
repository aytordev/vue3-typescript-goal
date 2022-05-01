<script lang="ts" setup>
  import {
    getTodos,
    removeTodos,
  } from '@/composables/todos-controller/todos-controller';
  import router from '@/router';
  import { useTodosStore } from '@/store/modules/todos/todos';
  import { storeToRefs } from 'pinia';

  const store = useTodosStore();
  const { total, active, completed } = storeToRefs(store);

  const getActive = async () => {
    await getTodos();
    await store.setTodosState(active.value);
  };
  const getCompleted = async () => {
    await getTodos();
    await store.setTodosState(completed.value);
  };

  const removeCompleted = () => {
    const todosToBeRemoved = completed.value.map((todo) => removeTodos(todo));

    Promise.all(todosToBeRemoved);
  };
</script>

<template>
  <div>
    <strong class="todo-count">{{ total }} items left</strong>
    <div class="filters">
      <li>
        <router-link
          to="/"
          class=""
          :class="router.currentRoute.value.path === '/' ? 'selected' : ''"
          @click="getTodos()"
          >All</router-link
        >
      </li>
      <li>
        <router-link
          to="/active"
          :class="
            router.currentRoute.value.path === '/active' ? 'selected' : ''
          "
          @click="getActive()"
          >Active</router-link
        >
      </li>
      <li>
        <router-link
          to="/completed"
          :class="
            router.currentRoute.value.path === '/completed' ? 'selected' : ''
          "
          @click="getCompleted()"
          >Completed</router-link
        >
      </li>
    </div>
    <button
      v-show="completed.length > 0"
      class="clear-completed"
      @click="removeCompleted()"
    >
      Clear completed
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .todo-count {
    float: left;
    text-align: left;
  }

  .todo-count strong {
    font-weight: 300;
  }

  .filters {
    position: absolute;
    right: 0;
    left: 0;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .filters li {
    display: inline;
  }

  .filters li a {
    padding: 3px 7px;
    margin: 3px;
    color: inherit;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  .filters li a:hover {
    border-color: rgb(175 47 47 / 10%);
  }

  .filters li a.selected {
    border-color: rgb(175 47 47 / 20%);
  }

  .clear-completed,
  html .clear-completed:active {
    position: relative;
    float: right;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  .clear-completed:hover {
    text-decoration: underline;
  }
</style>
