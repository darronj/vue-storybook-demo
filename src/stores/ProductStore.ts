import { defineStore } from 'pinia';

const products = [{
  id: 1,
  name: 'Product 1',
  price: 100,
},{
  id: 2,
  name: 'Product 2',
  price: 200,
}];

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      products,
    }
  },
  getters: {},
  actions: {},
});