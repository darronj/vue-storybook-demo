<template>
  <div class="p-4 border border-primary" >
    <div class="flex flex-col  place-items-center ">
      <Header>Counter</Header>
      <div class="text-center">{{ count }}</div>
      <div class="flex flex-row gap-8">
        <button
          class="bg-transparent   font-semibold hover:text-slate-400 py-2 px-4 border border-blue hover:border-transparent rounded"
          @click.prevent="store.randomizeCounter()">Randomize</button>
        <button
          class="bg-transparent   font-semibold hover:text-slate-400 py-2 px-4 border border-blue hover:border-transparent rounded"
          @click.prevent="store.increment()">Increment</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import { useCounterStore } from '@/stores/CounterStore';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { count } = storeToRefs(store);

</script>