import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { cartStore } from 'entities/Cart';

const appReducer = combineReducers({
  cart: cartStore.reducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);
export default persistedReducer;
