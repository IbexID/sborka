import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ['cart'],
  blacklist: [],
};
