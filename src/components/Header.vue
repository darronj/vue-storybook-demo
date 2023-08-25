<template>
  <h1 class="mb-2 text-slate-700 dark:text-slate-200 text-2xl font-bold">
    {{ label }}
  </h1>
</template>

<script lang="ts" setup>
const { label } = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
