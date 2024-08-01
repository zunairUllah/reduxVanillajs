// main.js
import store from './store';
import { setCategoryFilter } from './actions';
import { fetchProducts } from './api';

document.addEventListener('DOMContentLoaded', () => {
  // Example of interacting with the store on a checkbox change
  document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
      const categoryId = event.target.value;
      setCategoryFilter([categoryId]);
      fetchProducts(); // Fetch and update products based on new filters
    });
  });

  // Subscribe to store updates and update the DOM accordingly
  store.subscribe(() => {
    const state = store.getState();
    renderProducts(state.products);
  });

  // Initial fetch
  fetchProducts();
});

const renderProducts = (products) => {
  const productContainer = document.getElementById('product-list');
  productContainer.innerHTML = products.map(product => `<div>${product.name}</div>`).join('');
};
