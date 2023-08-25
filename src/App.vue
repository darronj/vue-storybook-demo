<script setup lang="ts">
import Products from '@/components/Products.vue';
import Counter from '@/components/Counter.vue';
import { useDark } from '@vueuse/core';

const isDark = useDark();
console.log(isDark);

</script>

<template>
  <div class="">
    <div class="h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-700">
      <h1 class="text-3xl font-bold dark:text-slate-100">My Stuff</h1>
      <div class="flex flex-col gap-4 mt-4">
        <Products />
        <Counter />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
