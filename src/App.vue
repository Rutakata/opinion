<script setup lang="ts">
  import Header from './components/header/Header.vue';
  import Home from './views/Home.vue';
  import PostInput from './components/home/PostInput.vue';
</script>

<template>
  <Header />
  <div class="view">
    <router-view />
  </div>
</template>

<style scoped>
  .view {
    width: 80vw;
    margin: 30px auto 0 auto;
  }
</style>
