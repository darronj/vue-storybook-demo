import App from '@/App.vue';
import { useCounterStore } from '@/stores/CounterStore';
import { useProductStore } from '@/stores/ProductStore';
import { createPinia } from 'pinia';
import { createApp } from 'vue';


import './style.css';

const pinia = createPinia();
createApp(App)
  .use(pinia)
  .mount('#app');

// application state
useProductStore();
useCounterStore();
