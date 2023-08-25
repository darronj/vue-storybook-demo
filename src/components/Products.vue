<template>
  <div class="p-4 border border-primary">
    <div class="flex flex-col place-items-center">
      <Header :label="label"></Header>
      <div v-for="product in products" :key="product.id">
        {{ product.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import { useProductStore } from '@/stores/ProductStore';
import { storeToRefs } from 'pinia';

const { label } = withDefaults(defineProps<{
  label: string
}>(), { label: 'Products' });
const { products } = storeToRefs(useProductStore());

</script>

