import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore } from 'redux-persist';

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: false,
      }),
  });
}

const store = makeStore();

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;
  type AppThunkAction = ThunkAction<void, RootState, unknown, AnyAction>;
}

export const wrapper = createWrapper<typeof store>(() => store);

export const persistor = persistStore(store);

export default store;
