<script setup lang="ts">
import MyComp from './components/MyComp.vue';
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold">My Stuff</h1>
    <div class="flex flex-row">
      <MyComp />
    </div>
  </div>
</template>

<style scoped></style>
