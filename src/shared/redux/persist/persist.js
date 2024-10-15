import { combineReducers } from '@reduxjs/toolkit';
import cart from '../slices/slices';

const rootReducer = combineReducers({
  Product: cart,
});

export default rootReducer;
