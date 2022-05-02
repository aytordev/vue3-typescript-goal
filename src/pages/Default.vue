<script lang="ts" setup>
  import Footer from '@/components/containers/footer/footer.vue';
  import Header from '@/components/containers/header/header.vue';
  import Main from '@/components/containers/main/main.vue';
  import { useTodosStore } from '@/store/modules/todos/todos';
  import { storeToRefs } from 'pinia';

  const store = useTodosStore();
  const { all } = storeToRefs(store);
</script>

<template>
  <div class="todoapp">
    <h1>todos</h1>
    <Header></Header>
    <Main v-show="all.length > 0" class="main"></Main>
    <Footer v-show="all.length > 0" class="footer"></Footer>
  </div>
</template>

<style lang="scss" scoped>
  .todoapp {
    position: relative;
    margin: 130px 0 40px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  }

  .todoapp h1 {
    position: absolute;
    top: -155px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    color: rgb(175 47 47 / 15%);
    text-align: center;
    -webkit-text-rendering: optimizelegibility;
    -moz-text-rendering: optimizelegibility;
    text-rendering: optimizelegibility;
  }

  .main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
  }

  .footer {
    height: 20px;
    padding: 10px 15px;
    color: #777;
    text-align: center;
    border-top: 1px solid #e6e6e6;
  }

  .footer::before {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    content: '';
    box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgb(0 0 0 / 20%);
  }

  @media (max-width: 430px) {
    .footer {
      height: 50px;
    }

    .filters {
      bottom: 10px;
    }
  }
</style>
