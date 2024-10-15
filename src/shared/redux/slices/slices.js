import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter((item) => item.uniqueId !== action.payload.uniqueId);
    },

    deleteallProduct: (state, action) => {
      return [];
    },
  },
});

export const { addProduct, deleteProduct, deleteallProduct } = cart.actions;

export default cart.reducer;
