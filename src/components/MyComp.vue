<template>
  <div>
    <p class="text-red-300">{{ value }}</p>
  </div>
  <div>
    <div>
      <div>
        <label for="myInput" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">My Input</label>
        <input type="text" id="myInput"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type here" v-model="value">
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const value = ref('')



</script>
