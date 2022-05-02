<script setup lang="ts">
  import { Todos } from '@/models/types/todos';
  import { PropType, ref } from 'vue';
  import inputVue from '../input/input.vue';

  const props = defineProps({
    todo: { type: Object as PropType<Todos>, default: null },
  });

  const emit = defineEmits([
    'todoToBeChecked',
    'todoToBeDeleted',
    'todoToBeModified',
  ]);

  const todoChecked = (todo: Todos) =>
    emit('todoToBeChecked', { ...todo, completed: !todo.completed });

  const todoDeleted = (todo: Todos) => emit('todoToBeDeleted', todo);
  const todoModified = (todo: Todos) => {
    editingMode.value = false;
    emit('todoToBeModified', { ...todo, description: description.value });
  };
  const editingMode = ref<boolean>(false);
  const description = ref<string>(props.todo.description);
</script>

<template>
  <div class="todo-list">
    <li v-if="!editingMode" :class="todo.completed ? 'completed' : ''">
      <input
        id=""
        type="checkbox"
        :name="todo.description"
        class="toggle"
        aria-label="checkbox"
        :checked="todo.completed"
        @click="todoChecked(todo)"
      />

      <label aria-label="label" @dblclick="editingMode = !editingMode">
        {{ todo?.description }}
      </label>

      <button
        class="destroy"
        aria-label="button"
        @click="todoDeleted(todo)"
      ></button>
    </li>
    <li v-else class="editing" @keydown.esc="editingMode = false">
      <inputVue
        ref="inputRef"
        v-model="description"
        type="text"
        class="edit"
        autofocus
        aria-label="input"
        @keydown.enter="todoModified(todo)"
        @blur="todoModified(todo)"
      />
    </li>
  </div>
</template>

<style lang="css" scoped>
  .todo-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .todo-list li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }

  .todo-list li:last-child {
    border-bottom: none;
  }

  .todo-list li.editing {
    padding: 0;
    border-bottom: none;
  }

  .todo-list li.editing .edit {
    display: block;
    width: 506px;
    padding: 12px 16px;
    margin: 0 0 0 43px;
  }

  .todo-list li.editing .view {
    display: none;
  }

  .todo-list li .toggle {
    position: absolute;
    top: 0;
    bottom: 0;
    display: block;
    width: 40px;

    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    margin: auto 0;
    text-align: center;
    border: none;

    /* Mobile Safari */
    appearance: none;
    appearance: none;
  }

  .todo-list li .toggle {
    opacity: 0;
  }

  .todo-list li .toggle + label {
    /*
		Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
		IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
	*/
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
  }

  .todo-list li .toggle:checked + label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
  }

  .todo-list li label {
    display: flex;
    padding: 15px 15px 15px 60px;
    line-height: 1.2;
    text-align: center;
    word-break: break-all;
    transition: color 0.4s;
  }

  .todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
  }

  .todo-list li .destroy {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    display: none;
    width: 40px;
    height: 40px;
    margin: auto 0;
    margin-bottom: 11px;
    font-size: 30px;
    color: #cc9a9a;
    transition: color 0.2s ease-out;
  }

  .todo-list li .destroy:hover {
    color: #af5b5e;
  }

  .todo-list li .destroy::after {
    content: '×';
  }

  .todo-list li:hover .destroy {
    display: block;
  }

  .todo-list li .edit {
    display: none;
  }

  .todo-list li.editing:last-child {
    margin-bottom: -1px;
  }
</style>
