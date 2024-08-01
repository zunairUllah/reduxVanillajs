// actions.js
import store from './store';

export const setCategoryFilter = (categories) => {
  store.dispatch({
    type: 'SET_CATEGORY_FILTER',
    payload: categories
  });
};

export const setPriceFilter = (price) => {
  store.dispatch({
    type: 'SET_PRICE_FILTER',
    payload: price
  });
};

export const setProducts = (products) => {
  store.dispatch({
    type: 'SET_PRODUCTS',
    payload: products
  });
};
