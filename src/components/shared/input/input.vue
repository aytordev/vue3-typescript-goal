<script setup lang="ts">
  import { ref } from 'vue';

  const focus = ref(false);

  defineProps({
    type: {
      type: String,
      default: 'text',
    },
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    modelValue: [String, Number],
  });

  const emit = defineEmits(['update:modelValue']);

  const input = (e: Event) =>
    emit('update:modelValue', (e.target as HTMLInputElement).value);
</script>

<template>
  <input
    v-bind="$attrs"
    :type="type"
    class="edit"
    :disabled="disabled"
    :value="modelValue"
    :placeholder="placeholder"
    aria-label="input"
    @input="input"
    @focus="focus = true"
    @blur="focus = false"
  />
</template>

<style scoped lang="scss">
  .new-todo,
  .edit {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 6px;
    margin: 0;
    font-family: inherit;
    font-size: 24px;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    border: 0;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
