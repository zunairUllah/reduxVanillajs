// store.js
const createStore = (reducer, initialState) => {
    let state = initialState;
    const listeners = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    };
  
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    };
  
    return { getState, dispatch, subscribe };
  };
  
  // Initial state
  const initialState = {
    filters: {
      category: [],
      price: []
    },
    products: []
  };
  
  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_CATEGORY_FILTER':
        return {
          ...state,
          filters: {
            ...state.filters,
            category: action.payload
          }
        };
      case 'SET_PRICE_FILTER':
        return {
          ...state,
          filters: {
            ...state.filters,
            price: action.payload
          }
        };
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload
        };
      default:
        return state;
    }
  };
  
  // Create the store
  const store = createStore(reducer, initialState);
  
  export default store;
  