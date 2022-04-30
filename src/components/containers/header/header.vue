<script lang="ts">
  import { createTodos } from '@/api/routes/todos';
import inputVue from '@/components/shared/input/input.vue';
import { defineComponent, Ref, ref } from 'vue';
  export default defineComponent({
    name: 'Main',
    components: {
      inputVue,
    },
    setup() {
      const todoValue: Ref<string> = ref<string>('');

      const query = async () => {
        console.log(todoValue);
        await createTodos({ description: todoValue.value, completed: false });
      };

      return {
        todoValue,
        query,
      };
    },
  });
</script>

<template>
  <input id="" type="checkbox" name="" class="toggle-all" />
  <label for=""></label>
  <inputVue
    ref="todosRef"
    type="text"
    class="new-todo"
    autofocus
    @input="(event: any) => (todoValue = (event.target?.value))"
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
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
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
