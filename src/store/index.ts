import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { keysReducer } from './keys/keys.slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['keys'],
};

const persisted = persistReducer(persistConfig, keysReducer);

export const store = configureStore({
  reducer: {
    keys: persisted,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
