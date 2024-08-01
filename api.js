// api.js
import store from './store';
import { setProducts } from './actions';

export const fetchProducts = async () => {
  try {
    const filters = store.getState().filters;
    const sendParam = {
      limit: 6,
      skip: 0,
      filters
    };
    const url = `products/by/search?data=${encodeURIComponent(JSON.stringify(sendParam))}`;
    const response = await fetch(`${API}/${url}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    setProducts(data); // Update the store with the fetched products
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
