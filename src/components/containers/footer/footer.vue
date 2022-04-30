<script lang="ts" setup></script>

<template>
  <div>
    <strong class="todo-count">2 items left</strong>
    <div class="filters">
      <li><router-link to="">All</router-link></li>
      <li><router-link to="">Selected</router-link></li>
      <li><router-link to="">Completed</router-link></li>
    </div>
    <button class="clear-completed">Clear completed</button>
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
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
  }

  .filters li {
    display: inline;
  }

  .filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  .filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  .filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }

  .clear-completed,
  html .clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  .clear-completed:hover {
    text-decoration: underline;
  }
</style>
