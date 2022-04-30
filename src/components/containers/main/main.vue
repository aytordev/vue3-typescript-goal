<script lang="ts">
  import { fetchTodos } from '@/api/routes/todos';
import item from '@/components/shared/item/item.vue';
import { Todos } from '@/models/types/todos';
import { defineComponent, onMounted, Ref, ref } from 'vue';

  export default defineComponent({
    name: 'Main',
    components: {
      item,
    },
    setup() {
      let listOfTodos: Ref<Todos[]> = ref<Todos[]>([]);
      onMounted(async () => {
        listOfTodos.value = await fetchTodos();
        console.log(listOfTodos.value);
      });

      return {
        listOfTodos,
      };
    },
  });
</script>

<template>
  <item
    v-for="todoElement in listOfTodos"
    v-show="listOfTodos.length > 0"
    :key="todoElement.id"
    :todo="todoElement"
  />
</template>
